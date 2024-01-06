import React, { useEffect, useRef } from 'react';

const HorizontalAd: React.FC = () => {
  const adRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    console.log('Ad clicked!');
  };

  const handleFocus = () => {
    console.log('Ad focused!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered ad!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left ad!');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log(`Key pressed: ${event.key}`);
  };

  useEffect(() => {
    const adElement = adRef.current;

    if (adElement) {
      adElement.addEventListener('click', handleClick);
      adElement.addEventListener('focus', handleFocus);
      adElement.addEventListener('mouseenter', handleMouseEnter);
      adElement.addEventListener('mouseleave', handleMouseLeave);
      adElement.addEventListener('keydown', (e) => handleKeyDown(e));

      return () => {
        adElement.removeEventListener('click', handleClick);
        adElement.removeEventListener('focus', handleFocus);
        adElement.removeEventListener('mouseenter', handleMouseEnter);
        adElement.removeEventListener('mouseleave', handleMouseLeave);
        adElement.removeEventListener('keydown', (e) => handleKeyDown(e));
      };
    }
  }, []);

  return (
    <article className="flex h-40 font-[roboto]" ref={adRef}>
      <div className="flex-1">
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
          alt="ad-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-2 flex-1 bg-slate-400 flex flex-col gap-6">
        <h4 className="w-32 text-xl">Try some Kind Cup coffee today</h4>
        <h5 className="text-sm text-gray-600">Kind Cup Coffee Company</h5>
      </div>
      <div className="flex-1 p-2 bg-slate-200">
        <p className="text-sm w-24 text-gray-700">
          Nutty and dark Ethiopian roast to help you get going in the morning.
          Stay kind! Kink Cup.
        </p>
      </div>
    </article>
  );
};

export default HorizontalAd;
