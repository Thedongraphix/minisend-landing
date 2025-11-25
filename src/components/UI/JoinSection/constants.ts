import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Minisend makes it so easy to convert my Farcaster tips to actual spending money. I can pay my bills with my creator earnings now. This is the future of the creator economy!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "As a builder on Base, Minisend solved a major problem for my users. Now they can cash out their earnings directly to M-Pesa. The API integration was straightforward and well-documented.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "I was skeptical about crypto until Minisend. Now I can actually use my USDC to pay for real things. The conversion to KES is instant and the fees are transparent. Game changer!",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "As a builder on Base, Minisend solved a major problem for my users. Now they can cash out their earnings directly to M-Pesa. The API integration was straightforward and well-documented.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Minisend makes it so easy to convert my Farcaster tips to actual spending money. I can pay my bills with my creator earnings now. This is the future of the creator economy!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Trusted by creators', 'and builders'];
