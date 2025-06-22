
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
    const interval = setInterval(updateCounter, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center animate-fadeIn">
      <h3 className="font-dancing text-lg md:text-xl text-rapunzel-purple mb-3 opacity-80">
        Te conozco desde hace...
      </h3>
      <div className="bg-gradient-to-r from-rapunzel-lightPurple/5 to-rapunzel-pink/5 rounded-lg p-4 backdrop-blur-sm border border-rapunzel-lightPurple/10">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="animate-slideInLeft">
            <div className="text-xl md:text-2xl font-bold gradient-text font-dancing">
              {days}
            </div>
            <div className="text-xs md:text-sm text-rapunzel-purple font-semibold opacity-70">
              días
            </div>
          </div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="text-xl md:text-2xl font-bold gradient-text font-dancing">
              {hours}
            </div>
            <div className="text-xs md:text-sm text-rapunzel-purple font-semibold opacity-70">
              horas
            </div>
          </div>
          <div className="animate-slideInRight" style={{ animationDelay: '0.5s' }}>
            <div className="text-xl md:text-2xl font-bold gradient-text font-dancing">
              {minutes}
            </div>
            <div className="text-xs md:text-sm text-rapunzel-purple font-semibold opacity-70">
              minutos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCounter;
