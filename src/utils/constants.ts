// Application constants
export const ANIMATION_SPEEDS = {
  TYPING_DEFAULT: 120,
  TYPING_FAST: 80,
  TYPING_SLOW: 180,
} as const;

export const INTERSECTION_OBSERVER_DEFAULTS = {
  THRESHOLD: 0.1,
  ROOT_MARGIN: '0px 0px -100px 0px',
  TRIGGER_ONCE: true,
} as const;

export const NAVIGATION_LINKS = [
  { href: '#education', text: '1 Education' },
  { href: '#leadership', text: '2 Leadership' },
  { href: '#experience', text: '3 Work Experience' },
  { href: '#projects', text: '4 Projects' },
  { href: '#contact', text: '5 Contact Information' },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dmitry-baryshnikov-326382156/',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/dimaa-b',
  },
] as const;
