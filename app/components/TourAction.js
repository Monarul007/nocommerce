import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const pairs = [
  { size: 128, bottom: -30 },
  { size: 167, bottom: -44 },
  { size: 56, bottom: -10 },
  { size: 324, bottom: -85 },
];

const calculateBottomPosition = (size, scalingFactor, constantOffset) => {
  return scalingFactor * size + constantOffset;
};

const TourAction = ({setOpen}) => {
  const [scalingFactor, setScalingFactor] = useState(0);
  const [constantOffset, setConstantOffset] = useState(0);

  const handleClickAction = () => {
    setOpen(false);
  }

  useEffect(() => {
    const calculateScalingFactor = () => {
      const newScalingFactor = (pairs[1].bottom - pairs[0].bottom) / (pairs[1].size - pairs[0].size);
      setScalingFactor(newScalingFactor);
    };

    const calculateConstantOffset = () => {
      const newConstantOffset = pairs[0].bottom - scalingFactor * pairs[0].size;
      setConstantOffset(newConstantOffset);
    };

    calculateScalingFactor();
    calculateConstantOffset();

    const updateButtonSize = () => {
      const circleElem = document.getElementById("circle");
      const button = document.getElementById("theBttn");
      const rect = circleElem.getBoundingClientRect();
    //   const circleHeight = rect.height;

      button.style.width = `${Math.floor(rect.width) - 20}px`;
      button.style.height = `${Math.floor(rect.height) - 20}px`;

      button.style.bottom = `${calculateBottomPosition(rect.width, scalingFactor, constantOffset)}px`;
    };

    updateButtonSize();
    window.addEventListener('resize', updateButtonSize);

    return () => {
      window.removeEventListener('resize', updateButtonSize);
    };
  }, [scalingFactor, constantOffset]);

  return (
    <div style={{ position: 'fixed', bottom: '65px', left: 0, right: 0, margin: '0 auto' }}>
      <svg id="theReact" viewBox="0 0 100 50">
        <defs>
          <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(245 136 72 / 80%)" />
            <stop offset="100%" stopColor="rgb(207 68 29 / 95%)" />
          </linearGradient>
          <mask id="mask" x="0" y="0" width="80" height="30">
            <rect x="5" y="5" width="90" height="40" fill="#fff" rx="7" />
            <circle id="circle" cx="50" cy="45" r="13" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100" height="50" mask="url(#mask)" fill="url(#grad1)" />
        <text x="50" y="12" fontSize="6" style={{ fill: 'white', fontWeight: 'bold' }}>Shop Smart, Shop Stylish:</text>
        <text x="50" y="18" fontSize="6" style={{ fill: 'white', fontWeight: 'bold' }}>Your Ultimate E-commerce</text>
        <text x="50" y="24" fontSize="6" style={{ fill: 'white', fontWeight: 'bold' }}>Companion!</text>
      </svg>
      <Link id="theBttn" href="/register" className="flex items-center justify-center round-button">
        <ArrowRight className='w-8 h-8'/>
      </Link>
    </div>
  );
};

export default TourAction;