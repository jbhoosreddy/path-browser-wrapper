let os;
const ua = window.navigator.userAgent;

if(ua) {
  if (ua.includes('Linux')) {
    os = 'Linux';
  } else if (ua.includes('Windows')) {
    os = "WINNT";
  } else if (ua.includes('Mac')) {
    os = 'Darwin';
  }
}

module.exports = os;