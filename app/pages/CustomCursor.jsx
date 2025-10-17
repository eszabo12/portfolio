import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [screenWidth, setWidth] = useState(0);
  const [ripple, setRipple] = useState(false);
  const rippleTimeout = useRef(null);

  // Track cursor position
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  // Track screen width (for mobile disable)
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (rippleTimeout.current) clearTimeout(rippleTimeout.current);
    };
  }, []);

  // Show ripple on mouse down
  useEffect(() => {
    const handleClick = () => {
      setRipple(true);
      if (rippleTimeout.current) clearTimeout(rippleTimeout.current);
      rippleTimeout.current = setTimeout(() => {
        setRipple(false);
      }, 300);
    };

    window.addEventListener('mousedown', handleClick, true);

    return () => {
      window.removeEventListener('mousedown', handleClick, true);
    };
  }, []);

  // Hide cursor on small screens
  if (screenWidth <= 450) {
    return <div />;
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          width: 0,
          height: 0,
        }}
      >
        {/* Ripple effect (transparent pink, no border) */}
        {ripple && (
          <span
            style={{
              position: 'absolute',
              left: '-25px',
              top: '-25px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(236, 72, 153, 0.22)', // transparent pink
              animation: 'ripple 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 9998,
              pointerEvents: 'none',
              border: 'none',
            }}
          />
        )}
        {/* Main cursor dot (transparent green, no border) */}
        <span
          style={{
            position: 'absolute',
            left: '-9px',
            top: '-9px',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.22)', // transparent green
            boxShadow: '0 1px 10px 0px rgba(34,197,94,0.11)',
            transition: 'box-shadow 0.2s',
            pointerEvents: 'none',
            border: 'none',
          }}
        />
        {/* Keyframes for ripple */}
        <style>
          {`
            @keyframes ripple {
              0% {
                opacity: 0;
              }
              25% {
                opacity: 0.1;
              }
              50% {
                opacity: 0.4;
                transform: scale(1.1);
              }
              75% {
                opacity: 0.3;
                transform: scale(1.2);
              }
              100% {
                opacity: 0.2;
                transform: scale(1.3);
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default CustomCursor;