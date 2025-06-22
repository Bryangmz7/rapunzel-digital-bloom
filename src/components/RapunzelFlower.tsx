
import React, { useEffect, useState } from 'react';

const RapunzelFlower = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [isBlooming, setIsBlooming] = useState(false);

  const generateSparkles = () =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));

  useEffect(() => {
    setSparkles(generateSparkles());
  }, []);

  const handleBloom = () => {
    if (!isBlooming) {
      setIsBlooming(true);
      setSparkles(generateSparkles());
    }
  };

  return (
    <div
      className="relative w-64 h-64 mx-auto animate-float cursor-pointer"
      onClick={handleBloom}
    >
      {!isBlooming && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none font-dancing text-lg text-rapunzel-gold">
          Haz clic
        </div>
      )}
      {/* Sparkles around the flower */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-rapunzel-gold to-rapunzel-pink rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`
          }}
        />
      ))}
      
      {/* Flower stem */}
      <div
        className="absolute bottom-0 left-1/2 w-2 h-32 bg-gradient-to-t from-green-600 to-green-400 rounded-full transition-transform duration-700"
        style={{ transform: `translateX(-50%) scaleY(${isBlooming ? 1 : 0})` }}
      ></div>
      
      {/* Leaves */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-8 w-8 h-4 bg-green-500 rounded-full rotate-45 animate-petal-sway transition-transform duration-700"
        style={{ transform: `translateX(-2rem) rotate(45deg) scale(${isBlooming ? 1 : 0})` }}
      ></div>
      <div
        className="absolute bottom-16 left-1/2 translate-x-4 w-6 h-3 bg-green-400 rounded-full -rotate-45 animate-petal-sway transition-transform duration-700"
        style={{ transform: `translateX(1rem) rotate(-45deg) scale(${isBlooming ? 1 : 0})`, animationDelay: '0.5s' }}
      ></div>
      
      {/* Flower center */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-rapunzel-gold to-yellow-400 rounded-full animate-glow shadow-lg transition-transform duration-700"
        style={{ transform: `translate(-50%, -50%) scale(${isBlooming ? 1 : 0})` }}
      >
        <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-rapunzel-gold rounded-full animate-pulse"></div>
      </div>
      
      {/* Petals */}
      {Array.from({ length: 8 }).map((_, i) => {
          const rotation = i * 45;
          const delay = i * 0.1;
          return (
            <div
              key={i}
              className="absolute top-8 left-1/2 origin-bottom transform -translate-x-1/2 -translate-y-full animate-petal-sway transition-transform duration-700"
              style={{
              transform: `translateX(-50%) translateY(-100%) rotate(${rotation}deg) scale(${isBlooming ? 1 : 0})`,
              animationDelay: `${delay}s`
              }}
            >
            <div className="w-8 h-16 bg-gradient-to-t from-rapunzel-darkPurple via-rapunzel-purple to-rapunzel-lightPurple rounded-full shadow-lg animate-glow"
                 style={{ transformOrigin: 'center bottom' }}>
              <div className="absolute inset-1 bg-gradient-to-t from-rapunzel-purple to-purple-300 rounded-full opacity-70"></div>
            </div>
          </div>
        );
      })}
      
      {/* Inner petals */}
      {Array.from({ length: 6 }).map((_, i) => {
          const rotation = i * 60 + 30;
          const delay = i * 0.15;
          return (
            <div
              key={`inner-${i}`}
              className="absolute top-12 left-1/2 origin-bottom transform -translate-x-1/2 -translate-y-full animate-petal-sway transition-transform duration-700"
              style={{
              transform: `translateX(-50%) translateY(-100%) rotate(${rotation}deg) scale(${isBlooming ? 1 : 0})`,
              animationDelay: `${delay}s`
              }}
            >
            <div className="w-6 h-12 bg-gradient-to-t from-rapunzel-pink via-purple-400 to-rapunzel-lightPurple rounded-full shadow-md animate-glow opacity-90"
                 style={{ transformOrigin: 'center bottom' }}>
            </div>
          </div>
        );
      })}
      
      {/* Magical glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-rapunzel-lightPurple/20 via-transparent to-transparent rounded-full animate-pulse"></div>
    </div>
  );
};

export default RapunzelFlower;
