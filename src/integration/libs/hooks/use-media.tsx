import * as React from 'react';

export const useMedia = () => {
  const device = {
    mobile: window.matchMedia('only screen and (max-width: 767px)').matches,
    tablet: window.matchMedia('only screen and (max-width: 1024px) and (min-width: 768px)').matches,
    browser: window.matchMedia('only screen and (min-width: 1025px)').matches,
  };
  const [isMobile, setIsMobile] = React.useState(device.mobile);
  const [isTablet, setIsTablet] = React.useState(device.tablet);
  const [isBrowser, setIsBrowser] = React.useState(device.browser);

  function handleSizeChange() {
    let resolution = 0;
    if (typeof window !== 'undefined') {
      resolution = window.innerWidth;
    }
    const resize = {
      mobile: resolution >= 320 && resolution <= 767,
      tablet: resolution >= 768 && resolution <= 1024,
      browser: resolution >= 1025
    };
    setIsTablet(resize.tablet);
    setIsMobile(resize.mobile);
    setIsBrowser(resize.browser);
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleSizeChange);
      }
    };
  }, [isMobile, isTablet, isBrowser]);

  return { isTablet, isBrowser, isMobile };
}
