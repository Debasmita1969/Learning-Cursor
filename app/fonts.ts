import { Instrument_Sans, Playfair_Display } from 'next/font/google';

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  display: 'swap',
});
