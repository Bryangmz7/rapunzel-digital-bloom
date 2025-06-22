
import React, { useEffect, useState } from 'react';
import RapunzelFlower from '../components/RapunzelFlower';
import DayCounter from '../components/DayCounter';
import MagicalParticles from '../components/MagicalParticles';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Efecto de entrada cuando se abre la carta
    let contentTimer: ReturnType<typeof setTimeout>;

    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar contenido después de un breve delay
      contentTimer = setTimeout(() => setShowContent(true), 500);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 relative overflow-hidden flex items-center justify-center p-4">
      <MagicalParticles />
      
      {/* Carta principal */}
      <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-2xl border border-rapunzel-lightPurple/20 relative z-10">
          
          {/* Contenido principal en grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh]">
            
            {/* Texto a la izquierda */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="font-dancing text-3xl md:text-4xl lg:text-5xl gradient-text mb-6 animate-glow">
                Para ti, niña de 150 cm:
              </h1>
              
              <div className="space-y-4 font-crimson text-base md:text-lg leading-relaxed text-gray-700">
                <p className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                  La verdad, no sé qué escribir, y como todo en la vida, lo hago un día antes. Técnicamente estás cumpliendo un año menos de vida… Ya empezaste a trabajar, muy pronto pagarás tus fabulosos impuestos, te graduarás de la universidad y, posiblemente, ya no nos veamos.
                </p>
                
                <p className="animate-fadeIn" style={{ animationDelay: '1.2s' }}>
                  Recuerdo que siempre dices que ya quieres que acabe el semestre; aún no lo sabes, pero estás viviendo la mejor etapa de tu vida. Y, como siempre te lo digo, eres muy ingenua e inocente, pero supongo que eso es lo que te hace ser tú.
                </p>
                
                <p className="animate-fadeIn" style={{ animationDelay: '1.6s' }}>
                  Tal vez no lo sepas, pero...
                </p>
              </div>
            </div>
            
            {/* Animación de la flor a la derecha */}
            <div className={`flex justify-center transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="animate-float">
                <RapunzelFlower />
              </div>
            </div>
          </div>
          
          {/* Contador sutil en la parte inferior */}
          <div className={`mt-8 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-5'}`}>
            <DayCounter />
          </div>
          
          {/* Mensaje final */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-dancing text-2xl md:text-3xl gradient-text animate-glow">
              ✨ Con amor infinito ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
