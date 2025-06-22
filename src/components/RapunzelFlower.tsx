
import React, { useEffect, useState } from 'react';

const RapunzelFlower = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const sparkleArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setSparkles(sparkleArray);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto animate-float">
      {/* Rotating sparkles */}
      <div className="absolute inset-0 animate-orbit-slow">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-rapunzel-gold to-rapunzel-pink rounded-full animate-sparkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay + 1}s`
            }}
          />
        ))}
      </div>

      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff7ae" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>
          <linearGradient id="stemGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
          <radialGradient id="outerPetal" cx="50%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
          <radialGradient id="innerPetal" cx="50%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#fbbf24" />
          </radialGradient>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* Stem */}
        <rect
          x="98"
          y="120"
          width="4"
          height="60"
          fill="url(#stemGradient)"
          className="origin-bottom animate-stem-grow"
        />

        {/* Leaves */}
        <path
          d="M100 150 C90 140 70 120 60 110 C75 125 85 135 100 150 Z"
          fill="url(#leafGradient)"
          className="animate-petal-sway animate-petal-bloom"
          style={{ animationDelay: '0.3s' }}
        />
        <path
          d="M100 150 C110 140 130 120 140 110 C125 125 115 135 100 150 Z"
          fill="url(#leafGradient)"
          className="animate-petal-sway animate-petal-bloom"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Outer star petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const delay = i * 0.1 + 0.6;
          const rotate = i * 45;
          return (
            <path
              key={i}
              d="M100 100 L114 58 Q100 40 86 58 Z"
              fill="url(#outerPetal)"
              transform={`rotate(${rotate} 100 100)`}
              className="origin-center animate-petal-sway animate-petal-bloom shadow-lg"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}

        {/* Inner star petals */}
        {Array.from({ length: 8 }).map((_, i) => {
          const delay = i * 0.15 + 1;
          const rotate = i * 45 + 22.5;
          return (
            <path
              key={`inner-${i}`}
              d="M100 100 L108 75 Q100 60 92 75 Z"
              fill="url(#innerPetal)"
              transform={`rotate(${rotate} 100 100)`}
              className="origin-center opacity-90 animate-petal-sway animate-petal-bloom"
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })}

        {/* Center */}
        <circle
          cx="100"
          cy="100"
          r="18"
          fill="url(#centerGradient)"
          className="shadow-lg animate-glow animate-center-bloom"
        />

        {/* Glow overlay */}
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="url(#centerGradient)"
          className="opacity-20 animate-pulse"
        />
      </svg>
    </div>
  );
};

export default RapunzelFlower;
