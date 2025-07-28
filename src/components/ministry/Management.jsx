import React from "react";
import chairman from '../../assets/ministry/Kwaku Duah Junior.jpg';
import avianna from '../../assets/ministry/Aviana Ohemaa Donkor 1.jpg';
import doris from '../../assets/ministry/Doris Amuzu Duah1.jpg';
import boamah from '../../assets/ministry/DAVID  BOAMAH-ODURO1.jpg';
import gomado from '../../assets/ministry/DAVID  GOMADO1.jpg';
import kingford from '../../assets/ministry/KINGSFORD AGYEI.jpg';
import lawrence from '../../assets/ministry/Lawrence Awartey.jpg';
import obeng from '../../assets/ministry/Obeng Kyei Baffour1.jpg';
import olivia from '../../assets/ministry/Olivia Dumaah.jpg';
import phanuel from '../../assets/ministry/Phannuel Demanya1.jpg';
import richard from '../../assets/leaders/Richard Asamoah Baah.jpg';
import rebecca from '../../assets/ministry/Rebecca Asankoma Addai1.jpg';
import logo from '../../assets/ministry/logos.jpeg';


const Management = () => {
  const teamMembers = [
    {
      name: "Kwaku Duah Junior",
      title: "Group Chairman & Founder",
      image: chairman,
      isChairman: true
    },
    {
      name: "Richard",
      title: "Chief Executive Officer",
      image: richard
    },
    {
      name: "Aviana Ohemaa Donkor-Duah",
      title: "Chief Executive Officer",
      image: avianna
    },
    {
      name: "David Boamah-Oduro",
      title: "Board Member",
      image: boamah
    },
    {
      name: "Doris Effah Kesse",
      title: "Board Member",
      image: doris
    },
    {
      name: "David Gomado",
      title: "Board Member",
      image: gomado
    },
    {
      name: "Phanuel",
      title: "Executive Director",
      image: phanuel
    },
    {
      name: "Rebecca",
      title: "Executive Director",
      image: rebecca
    },
    {
      name: "Kingford ",
      title: "Board Member",
      image: kingford
    },
    {
      name: "Obeng",
      title: "Chief Executive Officer",
      image: obeng
    },
    {
      name: "Lawrence",
      title: "Chief of Staff",
      image: lawrence
    },
    {
      name: "Olivia",
      title: "Executive Director",
      image: olivia
    },
    
  ];

  return (
    <div className="min-h-screen py-8 overflow-hidden ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white p-6 mx-4 rounded-lg shadow-lg">
          KDuah Ministry Management
        </h1>
      </div>

      {/* Rolling Circle Container - Increased size */}
      <div className="relative w-full h-[1000px] flex items-center justify-center">
        <div className="relative w-[900px] h-[900px]">
          {/* Rotating Circle */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
            {teamMembers.map((member, index) => {
              const angle = (index * 360) / teamMembers.length;
              // Increased radius significantly to prevent overlap
              const radius = member.isChairman ? 380 : 360;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Counter-rotate to keep images upright */}
                  <div 
                    className="animate-spin flex flex-col items-center"
                    style={{ 
                      animationDuration: '25s',
                      animationDirection: 'reverse'
                    }}
                  >
                    {/* Profile Image - Same sizes maintained */}
                    <div className={`relative ${member.isChairman ? 'w-40 h-52' : 'w-36 h-48'} mb-3`}>
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl rounded-lg">
                        <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden rounded-md">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Name and title tooltip */}
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white text-xs px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        <div className="font-semibold">{member.name}</div>
                        <div className="text-gray-300">{member.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Center Logo/Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center rounded-2xl w-40 h-40 flex items-center justify-center shadow-2xl">
            <div>
                <img 
                src={logo} 
                alt="Our logos"
                className="w-48 h-48 object-contain rounded-md"
                />
            </div>
            </div>
        </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Floating triangles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-yellow-300 opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
        
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute w-4 h-4 bg-cyan-300 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Management;

