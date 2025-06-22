
import React, { useEffect, useState } from 'react';
import RapunzelFlower from '../components/RapunzelFlower';
import DayCounter from '../components/DayCounter';
import MagicalParticles from '../components/MagicalParticles';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollY / (windowHeight * 0.8));
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterContent = [
    {
      title: "Para ti, niña de 150 cm:",
      content: "La verdad, no sé qué escribir, y como todo en la vida, lo hago un día antes. Técnicamente estás cumpliendo un año menos de vida… Ya empezaste a trabajar, muy pronto pagarás tus fabulosos impuestos, te graduarás de la universidad y, posiblemente, ya no nos veamos."
    },
    {
      title: "Recuerdos",
      content: "Recuerdo que siempre dices que ya quieres que acabe el semestre; aún no lo sabes, pero estás viviendo la mejor etapa de tu vida. Y, como siempre te lo digo, eres muy ingenua e inocente, pero supongo que eso es lo que te hace ser tú."
    },
    {
      title: "Nuestro Tiempo Juntos",
      content: "Tal vez no lo sepas, pero..."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 relative overflow-hidden">
      <MagicalParticles />
      
      {/* Hero Section */}
      <section className={`min-h-screen flex flex-col items-center justify-center px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl gradient-text mb-4 animate-fadeIn text-shadow">
            Carta Digital
          </h1>
          <p className="font-dancing text-xl md:text-2xl text-rapunzel-purple animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
            Una carta especial para alguien especial
          </p>
        </div>
        
        <div className="animate-slideInRight" style={{ animationDelay: '1s' }}>
          <RapunzelFlower />
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-rapunzel-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rapunzel-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Day Counter Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <DayCounter />
        </div>
      </section>

      {/* Letter Content Sections */}
      {letterContent.map((section, index) => (
        <section key={index} className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${currentSection >= index + 2 ? 'animate-fadeIn' : 'opacity-50'}`}>
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-rapunzel-lightPurple/20">
              <h2 className="font-dancing text-3xl md:text-4xl text-rapunzel-purple mb-6 text-center animate-slideInLeft">
                {section.title}
              </h2>
              <p className="font-crimson text-lg md:text-xl leading-relaxed text-gray-700 text-center animate-slideInRight" style={{ animationDelay: '0.3s' }}>
                {section.content}
              </p>
              
              {index === 2 && (
                <div className="mt-8 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                  <div className="inline-block">
                    <RapunzelFlower />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-rapunzel-purple/10 to-rapunzel-pink/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-rapunzel-lightPurple/20">
            <h2 className="font-dancing text-4xl md:text-5xl gradient-text mb-8 animate-fadeIn">
              Con amor infinito
            </h2>
            <div className="flex justify-center mb-8">
              <RapunzelFlower />
            </div>
            <p className="font-dancing text-2xl md:text-3xl text-rapunzel-purple animate-glow">
              ✨ Feliz Cumpleaños ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
