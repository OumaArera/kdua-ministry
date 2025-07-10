import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { managementTeam } from "../../data/wonLeadership";

const WonLeadership = () => {
  const [expandedExperience, setExpandedExperience] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const toggleExperience = (index) => {
    setExpandedExperience(prev => ({
      ...prev,
      [index]: !prev[index]
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

  const renderPagination = (currentPage, totalPages, setCurrentPage) => {
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
              : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg'
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
                className="px-3 py-2 rounded-lg font-medium text-purple-600 hover:bg-purple-50 transition-colors duration-200"
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
                  ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg'
                  : 'text-purple-600 hover:bg-purple-50'
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
                className="px-3 py-2 rounded-lg font-medium text-purple-600 hover:bg-purple-50 transition-colors duration-200"
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
              : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white shadow-md hover:shadow-lg'
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    );
  };

  const renderLeadershipMember = (member, index) => {
    const isExpanded = expandedExperience[index];
    
    return (
      <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
        <div className="text-center mb-6">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-100">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 flex items-center justify-center">
                <User className="w-14 h-14 text-white" />
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
          <p className="text-purple-600 font-semibold mb-3 text-sm uppercase tracking-wide bg-purple-50 px-3 py-1 rounded-full inline-block">
            {member.role}
          </p>
        </div>
        
        <div className="text-left">
          <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {isExpanded ? member.experience.trim() : truncateText(member.experience.trim(), 250)}
            </p>
          </div>
          
          {member.experience.trim().length > 250 && (
            <button
              onClick={() => toggleExperience(index)}
              className="flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-200 bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded-full"
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
  const paginatedMembers = paginate(managementTeam, currentPage, itemsPerPage);
  const totalPages = getTotalPages(managementTeam, itemsPerPage);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="text-5xl mb-6">👑</div> */}
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-6">
            WON Foundation Leadership
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Meet the visionary leaders driving our mission to transform lives and build hope for widows, orphans, and needy families
          </p>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership Team
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-sm bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
              Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, managementTeam.length)} of {managementTeam.length} leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedMembers.map((member, index) => {
              const actualIndex = (currentPage - 1) * itemsPerPage + index;
              return renderLeadershipMember(member, actualIndex);
            })}
          </div>
          
          {renderPagination(currentPage, totalPages, setCurrentPage)}
        </div>
      </div>
      <div className="mt-16 flex justify-center space-x-4">
        <button
          onClick={() => navigate('/won')}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
        >
          Go back to WON Foundation Page
        </button>
      </div>

    </div>
  );
};

export default WonLeadership;