
import React, { useEffect, useState } from 'react';

const DayCounter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const startDate = new Date('2022-09-23');
    
    const updateCounter = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setDays(totalDays);
      setHours(totalHours);
      setMinutes(totalMinutes);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8 animate-fadeIn">
      <h3 className="font-dancing text-3xl md:text-4xl text-rapunzel-purple mb-4 animate-glow">
        Te conozco desde hace...
      </h3>
      <div className="bg-gradient-to-r from-rapunzel-lightPurple/10 to-rapunzel-pink/10 rounded-lg p-6 backdrop-blur-sm border border-rapunzel-lightPurple/20">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="animate-slideInLeft">
            <div className="text-3xl md:text-4xl font-bold gradient-text font-dancing">
              {days}
            </div>
            <div className="text-sm md:text-base text-rapunzel-purple font-semibold">
              días
            </div>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text font-dancing">
              {hours}
            </div>
            <div className="text-sm md:text-base text-rapunzel-purple font-semibold">
              horas
            </div>
          </div>
          <div className="animate-slideInRight" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl md:text-4xl font-bold gradient-text font-dancing">
              {minutes}
            </div>
            <div className="text-sm md:text-base text-rapunzel-purple font-semibold">
              minutos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCounter;
