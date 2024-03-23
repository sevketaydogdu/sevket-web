export function detectDeviceOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('android')) {
    return 'Android';
  } else if (
    userAgent.includes('iphone') ||
    userAgent.includes('ipad') ||
    userAgent.includes('ipod')
  ) {
    return 'Apple';
  } else {
    return 'Unknown';
  }
}
