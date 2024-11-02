import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // استيراد المكونات من React Spring

const NoMoviesAnimation = () => {
  // إعداد خصائص الأنيميشن للنص
  const textAnimationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 200, friction: 20 },
  });

  // إعداد خصائص الأنيميشن للصورة
  const imageAnimationProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 150, friction: 15 },
  });

  return (
    <div className='text-center mt-5'>

      <animated.img
        style={imageAnimationProps}
        src='./no-movies.png' // المسار إلى الصورة
        alt='No movies available'
        width={300}
        height={300}
        className='mb-4'
      />
      <animated.h2 style={textAnimationProps} className='text-center'>
        لا يوجد أفلام
      </animated.h2>
    </div>
  );
};

export default NoMoviesAnimation;
