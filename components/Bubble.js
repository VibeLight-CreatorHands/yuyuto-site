// components/Bubble.js
import React from 'react';

const Bubble = ({ visible, children }) => {
  if (!visible) return null;
    return (
        <div className="bubble">
              {children}
                  </div>
                    );
                    };

                    export default Bubble;
                    