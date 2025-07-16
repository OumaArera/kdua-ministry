import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Award, Heart, Star, Sparkles } from 'lucide-react';
import { managementTeam } from '../../data/ctcl.leaders';

const TeamModal = ({ isOpen, onClose }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterRole, setFilterRole] = useState('all');

  // Get unique roles for filtering
  const uniqueRoles = ['all', ...new Set(managementTeam.map(member => member.role))];

  // Filter members based on selected role
  const filteredMembers = filterRole === 'all' 
    ? managementTeam 
    : managementTeam.filter(member => member.role === filterRole);

  const openMemberDetail = (member) => {
    setSelectedMember(member);
  };

  const closeMemberDetail = () => {
    setSelectedMember(null);
  };

  const handleModalClose = () => {
    setSelectedMember(null);
    onClose();
  };

  if (!isOpen) return null;

  const MemberCard = ({ member, index }) => {
    const cardColors = [
      'from-blue-400 to-indigo-500',
      'from-green-400 to-teal-500',
      'from-purple-400 to-violet-500',
      'from-rose-400 to-pink-500',
      'from-yellow-400 to-orange-500',
      'from-cyan-400 to-blue-500'
    ];
    
    const gradientColor = cardColors[index % cardColors.length];

    return (
      <div 
        className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 hover:border-transparent overflow-hidden`}
        onClick={() => openMemberDetail(member)}
      >
        {/* Floating decoration */}
        <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        {/* Member Image */}
        <div className="relative mb-4 mx-auto w-24 h-24">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg ring-2 ring-gray-100">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
                <User className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
          {/* Floating star */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {member.name}
          </h3>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradientColor} shadow-sm`}>
            <Award className="w-3 h-3 mr-1" />
            {member.role}
          </div>
          
          {/* Brief description */}
          <p className="text-gray-600 text-sm leading-relaxed px-1 line-clamp-2">
            {member.experience?.substring(0, 80)}...
          </p>
          
          {/* Hover indicator */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1">
            <div className="flex items-center justify-center text-xs text-gray-500">
              <Sparkles className="w-3 h-3 mr-1" />
              Click for details
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MemberDetailModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-60 p-4">
        <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Experience */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                Experience & Background
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                {member.experience}
              </p>
            </div>

            {/* Contact Info (if available) */}
            {(member.email || member.phone || member.location) && (
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h4>
                <div className="space-y-2">
                  {member.email && (
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700 text-sm">{member.email}</span>
                    </div>
                  )}
                  {member.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{member.phone}</span>
                    </div>
                  )}
                  {member.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700 text-sm">{member.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Leadership Team
                </h2>
                <p className="text-gray-600 text-sm">Meet our dedicated leaders</p>
              </div>
            </div>
            <button
              onClick={handleModalClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {uniqueRoles.map(role => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  filterRole === role
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                {role === 'all' ? 'All Members' : role}
              </button>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No team members found for this role.</p>
            </div>
          )}
        </div>
      </div>

      {/* Member Detail Modal */}
      <MemberDetailModal member={selectedMember} onClose={closeMemberDetail} />
    </div>
  );
};

export default TeamModal;