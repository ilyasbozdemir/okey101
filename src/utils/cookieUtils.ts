import { parseCookies, setCookie } from 'nookies';

export const setDeviceTypeCookie = (width: number): void => {
  let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  const userAgent = navigator.userAgent.toLowerCase();

  if (width <= 768 || /iphone|ipod|android.*mobile|windows phone|blackberry.*mobile/.test(userAgent)) {
    deviceType = 'mobile';
  } else if (width > 768 && width <= 1024 || /ipad|android(?!.*mobile)|tablet/.test(userAgent)) {
    deviceType = 'tablet';
  }

  setCookie(null, 'deviceType', deviceType, { path: '/' });
};

export const getDeviceTypeCookie = (): 'mobile' | 'tablet' | 'desktop' | undefined => {
  const cookies = parseCookies();
  return cookies.deviceType as 'mobile' | 'tablet' | 'desktop' | undefined;
};
