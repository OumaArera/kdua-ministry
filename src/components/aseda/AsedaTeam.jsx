import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Award, Heart, ChevronDown, ChevronUp, Star, Sparkles } from 'lucide-react';
import { managementTeam } from "../../data/aseda.leaders";

const AsedaTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filterRole, setFilterRole] = useState('all');
  const navigate = useNavigate();

  // Get unique roles for filtering
  const uniqueRoles = ['all', ...new Set(managementTeam.map(member => member.role))];

  // Filter members based on selected role
  const filteredMembers = filterRole === 'all' 
    ? managementTeam 
    : managementTeam.filter(member => member.role === filterRole);

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  const MemberCard = ({ member, index }) => {
    const cardColors = [
      'from-rose-400 to-pink-500',
      'from-blue-400 to-indigo-500',
      'from-green-400 to-teal-500',
      'from-yellow-400 to-orange-500',
      'from-purple-400 to-violet-500',
      'from-cyan-400 to-blue-500'
    ];
    
    const gradientColor = cardColors[index % cardColors.length];

    return (
      <div 
        className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-gradient-to-r ${gradientColor} overflow-hidden`}
        onClick={() => openMemberModal(member)}
      >
        {/* Floating decoration */}
        <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
        <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br ${gradientColor} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        
        {/* Member Image */}
        <div className="relative mb-6 mx-auto w-32 h-32">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
                <User className="w-16 h-16 text-white" />
              </div>
            )}
          </div>
          {/* Floating star */}
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {member.name}
          </h3>
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${gradientColor} shadow-md`}>
            <Award className="w-4 h-4 mr-2" />
            {member.role}
          </div>
          
          {/* Brief description */}
          <p className="text-gray-600 text-sm leading-relaxed px-2 line-clamp-3">
            {member.experience?.substring(0, 120)}...
          </p>
          
          {/* Hover indicator */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Sparkles className="w-4 h-4 mr-1" />
              Click to learn more
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronUp className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Experience */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Experience & Background
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {member.experience}
              </p>
            </div>

            {/* Contact Info (if available) */}
            {(member.email || member.phone || member.location) && (
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  {member.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{member.email}</span>
                    </div>
                  )}
                  {member.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{member.phone}</span>
                    </div>
                  )}
                  {member.location && (
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{member.location}</span>
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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6">
            Meet Our Amazing Team
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Passionate individuals dedicated to making a difference in the world through innovation and compassion
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {uniqueRoles.map(role => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filterRole === role
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {role === 'all' ? 'All Team Members' : role}
            </button>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No team members found for this role.</p>
          </div>
        )}<div className="mt-16 flex justify-center space-x-4">
        <button
          onClick={() => navigate('/aseda')}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
        >
          Go back to Aseda Musical Concept Page
        </button>
      </div>
      </div>

      {/* Member Modal */}
      <MemberModal member={selectedMember} onClose={closeMemberModal} />
    </div>
  );
};

export default AsedaTeam;