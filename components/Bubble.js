// components/Bubble.js
import React from 'react';

const Bubble = ({ visible, children }) => {
if (!visible) return null;
  return (
  <div className="bubble"
  style={{
    display: visible ? 'block' : 'none',
    position: 'fixed',
    bottom: '20px', 
    left: '50%',
    transform: 'translateX(-50%)', // 水平中央揃え
    backgroundColor: '#fff',
    padding: '10px 20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgb(0, 0, 0)',
    zIndex: 1000,
    transition: 'opacity 0.3s ease', 
    opacity: visible ? 1 : 0,
  }}
  >
  {children}
  </div>
  );
};
export default Bubble;
                    