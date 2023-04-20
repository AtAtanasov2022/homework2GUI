import React, { useState } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const handleClick = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className='bg-bar-green relative text-center avenir-book'>
          <a href='#'>FREE DELIVERY AND FREE RETURNS</a>
          <button className="bg-transparent absolute py-0 right-10 top-0 text-xl" onClick={handleClick}>
            <span className="close">X</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
