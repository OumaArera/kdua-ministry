import React, { useState } from "react";
import { ChevronDown, ChevronUp, User, ChevronLeft, ChevronRight } from 'lucide-react';
import chairman from '../../assets/chairman_photo.png';
import { 
  messageOfTheGroupChairman, 
  boardOfDirectors, 
  managementTeam 
} from "../../data/boardMembers";

const OurTeam = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState({});
  
  // Pagination states
  const [boardCurrentPage, setBoardCurrentPage] = useState(1);
  const [managementCurrentPage, setManagementCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const toggleExperience = (index, section) => {
    const key = `${section}-${index}`;
    setExpandedExperience(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Pagination logic
  const paginate = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const getTotalPages = (items, itemsPerPage) => {
    return Math.ceil(items.length / itemsPerPage);
  };

  const renderPagination = (currentPage, totalPages, setCurrentPage, section) => {
    if (totalPages <= 1) return null;

    const pages = [];
    const showPages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-12">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white shadow-md hover:shadow-lg'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-1">
          {startPage > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className="px-3 py-2 rounded-lg font-medium text-teal-600 hover:bg-teal-50 transition-colors duration-200"
              >
                1
              </button>
              {startPage > 2 && <span className="px-2 py-2 text-gray-400">...</span>}
            </>
          )}
          
          {pages.map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                page === currentPage
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg'
                  : 'text-teal-600 hover:bg-teal-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="px-2 py-2 text-gray-400">...</span>}
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-2 rounded-lg font-medium text-teal-600 hover:bg-teal-50 transition-colors duration-200"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white shadow-md hover:shadow-lg'
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    );
  };

  const renderTeamMember = (member, index, section, actualIndex) => {
    const key = `${section}-${actualIndex}`;
    const isExpanded = expandedExperience[key];
    
    return (
      <div key={actualIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="text-center mb-4">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-teal-600 font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
        </div>
        
        <div className="text-left">
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {isExpanded ? member.experience.trim() : truncateText(member.experience.trim())}
          </p>
          
          {member.experience.trim().length > 200 && (
            <button
              onClick={() => toggleExperience(actualIndex, section)}
              className="flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  <span>Read More</span>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  // Get paginated data
  const paginatedBoardMembers = paginate(boardOfDirectors, boardCurrentPage, itemsPerPage);
  const paginatedManagementMembers = paginate(managementTeam, managementCurrentPage, itemsPerPage);
  
  const boardTotalPages = getTotalPages(boardOfDirectors, itemsPerPage);
  const managementTotalPages = getTotalPages(managementTeam, itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who drive our mission to put "The Gospel on Display"
          </p>
        </div>

        {/* Chairman's Message */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                <img 
                  src={chairman} 
                  alt="Group Chairman"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {messageOfTheGroupChairman[0].title}
              </h3>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="whitespace-pre-line text-lg leading-loose tracking-wide text-gray-800 text-center max-w-3xl mx-auto">
                {showFullMessage 
                  ? messageOfTheGroupChairman[0].message.trim()
                  : truncateText(messageOfTheGroupChairman[0].message.trim(), 400)
                }
              </p>
              
              {messageOfTheGroupChairman[0].message.trim().length > 400 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowFullMessage(!showFullMessage)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {showFullMessage ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        <span>Read Full Message</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              )}
              
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-teal-700">
                  {messageOfTheGroupChairman[0].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Board of Directors
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-2"></div>
            <p className="text-gray-600 text-sm">
              Showing {((boardCurrentPage - 1) * itemsPerPage) + 1} - {Math.min(boardCurrentPage * itemsPerPage, boardOfDirectors.length)} of {boardOfDirectors.length} members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBoardMembers.map((member, index) => {
              const actualIndex = (boardCurrentPage - 1) * itemsPerPage + index;
              return renderTeamMember(member, index, 'board', actualIndex);
            })}
          </div>
          
          {renderPagination(boardCurrentPage, boardTotalPages, setBoardCurrentPage, 'board')}
        </div>

        {/* Management Team */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Management Team
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-2"></div>
            <p className="text-gray-600 text-sm">
              Showing {((managementCurrentPage - 1) * itemsPerPage) + 1} - {Math.min(managementCurrentPage * itemsPerPage, managementTeam.length)} of {managementTeam.length} members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedManagementMembers.map((member, index) => {
              const actualIndex = (managementCurrentPage - 1) * itemsPerPage + index;
              return renderTeamMember(member, index, 'management', actualIndex);
            })}
          </div>
          
          {renderPagination(managementCurrentPage, managementTotalPages, setManagementCurrentPage, 'management')}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;