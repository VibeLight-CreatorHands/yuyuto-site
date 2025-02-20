import React from 'react';

const Bubble = ({ visible, children, buttonRef }) => {
  if (!visible) return null;

  return (
    <div
      className="bubble"
      style={{
        display: visible ? 'block' : 'none',
        position: 'absolute', // 親要素に対して位置を決定
        bottom: 'calc(100% + 10px)', // ボタンの上に10pxの余白
        left: '50%', // 水平中央揃え
        transform: 'translateX(-50%)', // 中央揃えを維持
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
