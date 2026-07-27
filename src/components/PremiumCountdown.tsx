import React, { useState, useEffect } from 'react';

interface FlipCardProps {
  value: number;
  digitsCount: 1 | 2;
  label?: string;
}

const FlipCard = ({ value, digitsCount, label }: FlipCardProps) => {
  const pad = (num: number) => {
    return digitsCount === 2 
      ? num.toString().padStart(2, '0') 
      : num.toString();
  };

  const getPrevVal = () => {
    if (digitsCount === 1) {
      return value === 9 ? 0 : value + 1;
    }
    if (label === 'Days') return value + 1;
    if (label === 'Hours') return value === 23 ? 0 : value + 1;
    return value === 59 ? 0 : value + 1;
  };

  const displayVal = pad(value);
  const displayValPrev = pad(getPrevVal());
  
  const fontSize = displayVal.length > 2 ? '54px' : '72px';
  const cardWidth = digitsCount === 2 ? '110px' : '55px';

  return (
    <div className="flex flex-col items-center">
      {/* 3D Container */}
      <div 
        className="relative select-none"
        style={{
          width: cardWidth,
          height: '150px',
          perspective: '1000px'
        }}
      >
        {/* We use the value as the key, so when it changes, the card is remounted and triggers the animation */}
        <div
          key={value}
          className="flip-animation-card"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front Face (New Value) */}
          <div 
            className="absolute inset-0 bg-white rounded-[28px] flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <span 
              className="font-normal text-[#008C49] tracking-[-0.02em] font-sans leading-none"
              style={{ fontSize }}
            >
              {displayVal}
            </span>
          </div>

          {/* Back Face (Old Value - flipped) */}
          <div 
            className="absolute inset-0 bg-white rounded-[28px] flex items-center justify-center"
            style={{
              transform: 'rotateX(-180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <span 
              className="font-normal text-[#008C49] tracking-[-0.02em] font-sans leading-none"
              style={{ fontSize }}
            >
              {displayValPrev}
            </span>
          </div>
        </div>
      </div>

      {/* Label */}
      {label && (
        <span className="mt-6 text-[#64748b] text-sm font-extrabold tracking-[0.25em] uppercase">
          {label}
        </span>
      )}
    </div>
  );
};

interface PremiumCountdownProps {
  targetDate: number;
  flipStyle?: 'full' | 'half';
}

const PremiumCountdown = ({ targetDate, flipStyle = 'full' }: PremiumCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTime());

    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const renderUnit = (value: number, label: string) => {
    if (flipStyle === 'full') {
      return <FlipCard value={value} digitsCount={2} label={label} />;
    } else {
      return (
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <FlipCard value={Math.floor(value / 10)} digitsCount={1} />
            <FlipCard value={value % 10} digitsCount={1} />
          </div>
          <span className="mt-6 text-[#64748b] text-sm font-extrabold tracking-[0.25em] uppercase">
            {label}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 md:gap-8">
      {renderUnit(timeLeft.days, 'Days')}
      {renderUnit(timeLeft.hours, 'Hours')}
      {renderUnit(timeLeft.minutes, 'Minutes')}
      {renderUnit(timeLeft.seconds, 'Seconds')}
    </div>
  );
};

export default PremiumCountdown;

