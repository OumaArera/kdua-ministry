import React from "react";
import { 
  Music, 
  Mic, 
  Trophy,
  Users,
  X
} from 'lucide-react';

const EventStats = ({ event }) => {
    const totalParticipants = event.singers.length + event.speakers.length;
    const totalAwards = event.awards.length;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Music className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{event.singers.length}</div>
          <div className="text-gray-600 font-medium">Performers</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Mic className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{event.speakers.length}</div>
          <div className="text-gray-600 font-medium">Speakers</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{totalAwards}</div>
          <div className="text-gray-600 font-medium">Awards</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-800 mb-2">{totalParticipants}</div>
          <div className="text-gray-600 font-medium">Total Participants</div>
        </div>
      </div>
    );
  };

export default EventStats;