import Image from 'next/image'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { navItems } from '@/lib/site'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

const WHATSAPP_URL =
  'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev'
const EMAIL = 'owlydev.team@gmail.com'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-deep)]">
      <div className="mx-auto w-full max-w-[var(--max-content)] px-6 pt-16 pb-12 lg:px-8">

        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Image
              src="/branding/logo.webp"
              alt="OwlyDev"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
            <p className="max-w-[280px] text-[13px] leading-[1.6] text-[var(--color-ink-quaternary)]">
              {t('tagline')}
            </p>
          </div>

          {/* Col 2 — Nav */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <ul className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-2 md:flex-col md:gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[13px] text-[var(--color-ink-tertiary)] transition-colors duration-[120ms] hover:text-[var(--color-ink-secondary)]"
                  >
                    {tNav(item.id as Parameters<typeof tNav>[0])}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-[var(--color-ink-tertiary)] transition-colors duration-[120ms] hover:text-[var(--color-ink-secondary)]"
            >
              <WhatsAppIcon size={14} className="text-[var(--color-whatsapp)]" />
              +57 302 858 4906
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-[13px] text-[var(--color-ink-tertiary)] transition-colors duration-[120ms] hover:text-[var(--color-ink-secondary)]"
            >
              <Mail size={14} strokeWidth={1.5} className="text-[var(--color-ink-quaternary)]" />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-[var(--color-border-subtle)] pt-6 text-center md:flex-row md:justify-between">
          <p className="text-[12px] text-[var(--color-ink-quaternary)]">{t('copyright')}</p>
          <p className="text-[12px] text-[var(--color-ink-quaternary)]">{t('madeIn')}</p>
        </div>
      </div>
    </footer>
  )
}
