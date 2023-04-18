import React, { useState } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const handleClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className=' font-avenir-book text-10 tracking-tighter fixed top-0 left-0 w-full h-8 bg-promotion-green text-white flex justify-center items-center'>
          <p className="text-center">FREE DELIVERY AND FREE RETURNS</p>
          <button className='absolute top-1 right-1 h-5 px-5 text-white ' onClick={handleClick}>X</button>
        </div>
      )}
    </>
  );
}

export default App;
