import heroBg from '@assets/images/hero-bg.jpg';
import aboutTeam from '@assets/images/about-team.jpg';
import careFacility from '@assets/images/care-facility.jpg';
import featuredSection from '@assets/images/featured-section.jpg';
import residentialCare from '@assets/images/residential-care.jpg';
import teamPortrait from '@assets/images/team-portrait.jpg';
import serviceGeneral from '@assets/images/service-general.jpg';
import wellbeingSupport from '@assets/images/wellbeing-support.jpg';

const imageRegistry = {
  'hero-bg': heroBg,
  'about-team': aboutTeam,
  'care-facility': careFacility,
  'featured-section': featuredSection,
  'residential-care': residentialCare,
  'team-portrait': teamPortrait,
  'service-general': serviceGeneral,
  'wellbeing-support': wellbeingSupport,
} as const;

export type SquareImageKey = keyof typeof imageRegistry;

export function getSquareImage(imageKey: string) {
  return imageRegistry[imageKey as SquareImageKey] ?? heroBg;
}
