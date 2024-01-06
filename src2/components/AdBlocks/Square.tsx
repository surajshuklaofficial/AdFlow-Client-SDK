import React, { useEffect, useRef } from 'react';

const SquareAd: React.FC = () => {
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
    <article className="flex w-72 h-72 font-[roboto] flex-col" ref={adRef}>
      <div className="h-3/6">
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
          alt="ad-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-2 h-1/6 bg-slate-400 flex flex-col gap-2">
        <h4 className="text-lg">Try some Kind Cup coffee today</h4>
      </div>
      <div className="h-2/6 p-2 py-4 bg-slate-200">
        <p className="text-sm text-gray-700">
          Nutty and dark Ethiopian roast to help you get going in the morning.
          Stay kind! Kink Cup.
        </p>
        <h5 className="text-xs text-gray-600">Kind Cup Coffee Company</h5>
      </div>
    </article>
  );
};

export default SquareAd;
