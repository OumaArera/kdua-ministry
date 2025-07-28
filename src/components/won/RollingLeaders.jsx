import React from "react";
import chairman from '../../assets/won/leaders/Kwaku Duah Junior.jpg';
import doris from '../../assets/won/leaders/Doris Amuzu Duah.jpg';
import david from '../../assets/won/leaders/DAVID  BOAMAH-ODURO.jpg';
import kingford from '../../assets/won/leaders/Kingsford Agyei.jpg';
import linda from '../../assets/won/leaders/LINDA BARNIE EFFAH.jpg';
import obeng from '../../assets/won/leaders/Obeng Kyei Baffour.jpg';
import rebecca from '../../assets/won/leaders/Rebecca Asankoma Addai.jpg';
import richard from '../../assets/won/leaders/Richard Asamoah Baah.jpg';
import gomado from '../../assets/ministry/team/DAVID  GOMADO.jpg';
import olivia from '../../assets/ministry/team/Olivia Dumaah.jpg';
import lawrence from '../../assets/ministry/team/Lawrence Awartey.jpg';
import phanuel from '../../assets/ministry/team/Phannuel Demanya.jpg';
import logo from '../../assets/won_logo.png';

const RollingLeaders = () => {
  const teamMembers = [
    {
      name: "Kwaku Duah Junior",
      title: "Group Chairman & Founder",
      image: chairman,
      isChairman: true
    },
    {
      name: "Richard Asamoah Baah",
      title: "Chief Executive Officer",
      image: richard
    },
    {
      name: "David Boamah-Oduro",
      title: "Board Member",
      image: david
    },
    {
      name: "Doris Effah Kesse",
      title: "Board Member",
      image: doris
    },
    
    {
      name: "Linda Barnie Effah",
      title: "Board Member",
      image: linda
    },
    {
      name: "Obeng Kyei Baffour",
      title: "Chief Executive Officer",
      image: obeng
    },
    {
      name: "Rebecca Asankoma Addai",
      title: "Executive Director",
      image: rebecca
    },
    {
      name: "Kingsford Agyei",
      title: "Board Member",
      image: kingford
    },
    {
      name: "Olivia",
      title: "Board Member",
      image: olivia
    },
    {
      name: "Phanuel",
      title: "Board Member",
      image: phanuel
    },
    {
      name: "Gomado",
      title: "Board Member",
      image: gomado
    },
    {
      name: "Lawrence",
      title: "Board Member",
      image: lawrence
    },
  ];

  return (
    <div className="min-h-screen py-8 overflow-hidden ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-pink-700  p-6 mx-4 rounded-lg shadow-lg">
          Widows, Orphans, and Needy Foundation Leadership
        </h1>
      </div>

      {/* Rolling Circle Container */}
      <div className="relative w-full h-[800px] flex items-center justify-center">
        <div className="relative w-[700px] h-[700px]">
          {/* Rotating Circle */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            {teamMembers.map((member, index) => {
              const angle = (index * 360) / teamMembers.length;
              const radius = member.isChairman ? 280 : 260;
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
                  {/* Only the image rotates, keeping it upright */}
                  <div 
                    className="animate-spin flex flex-col items-center"
                    style={{ 
                      animationDuration: '20s',
                      animationDirection: 'reverse'
                    }}
                  >
                    {/* Profile Image - Larger and not rounded */}
                    <div className={`relative ${member.isChairman ? 'w-40 h-52' : 'w-36 h-48'} mb-3`}>
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl">
                        <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
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
                  alt="WON Foundation logo"
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

export default RollingLeaders;

