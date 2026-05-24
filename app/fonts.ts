import { Fraunces } from 'next/font/google'

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT'],
  display: 'swap',
})
