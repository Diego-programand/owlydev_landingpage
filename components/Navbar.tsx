'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
const NAV_LINKS = navItems.filter((item) => item.id !== 'contact')

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: 'es' | 'en') {
    if (newLocale === locale) return
    const newPath =
      newLocale === routing.defaultLocale
        ? pathname.replace(/^\/en/, '') || '/'
        : `/en${pathname}`
    router.push(newPath)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => switchLocale('es')}
        className={cn(
          'text-[13px] transition-colors duration-[120ms]',
          locale === 'es'
            ? 'font-medium text-[var(--color-ink-secondary)]'
            : 'font-normal text-[var(--color-ink-quaternary)] hover:text-[var(--color-ink-tertiary)]'
        )}
      >
        ES
      </button>
      <span aria-hidden className="select-none text-[13px] text-[var(--color-ink-quaternary)] opacity-40">
        /
      </span>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'text-[13px] transition-colors duration-[120ms]',
          locale === 'en'
            ? 'font-medium text-[var(--color-ink-secondary)]'
            : 'font-normal text-[var(--color-ink-quaternary)] hover:text-[var(--color-ink-tertiary)]'
        )}
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const ids = useMemo(() => navItems.map((n) => n.id), [])
  const active = useActiveSection(ids, 96)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations('nav')
  const { scrollY } = useScroll()

  const whatsappUrl =
    locale === 'en'
      ? "https://wa.me/573028584906?text=Hi%2C+I'd+like+to+know+more+about+OwlyDev"
      : 'https://wa.me/573028584906?text=Hola%2C+quiero+saber+m%C3%A1s+sobre+OwlyDev'

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 80))

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-16 xl:h-18 transition-[background-color,border-color] duration-[320ms] [transition-timing-function:var(--ease-out-quart)]',
          scrolled || mobileOpen
            ? 'border-b border-[var(--color-border-subtle)] bg-[oklch(0.97_0.015_264/0.92)] backdrop-blur-[8px]'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <div className="mx-auto flex h-full max-w-[var(--max-page)] items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <button
            onClick={() => {
              setMobileOpen(false)
              scrollToSection('hero')
            }}
            aria-label="Ir al inicio"
            className="flex items-center focus-visible:outline-none"
          >
            <Image
              src="/branding/logo.webp"
              alt="OwlyDev"
              width={140}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </button>

          {/* Desktop nav */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className="relative px-3 py-1.5 text-[14px] text-[var(--color-ink-secondary)] transition-colors duration-[120ms] hover:text-[var(--color-ink-primary)]"
              >
                {t(item.id as Parameters<typeof t>[0])}
                {active === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-px h-[2px] rounded-[1px] bg-[var(--color-ink-secondary)]"
                    transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Language toggle — desktop */}
            <div className="hidden lg:flex">
              <LanguageToggle />
            </div>

            {/* NavCTA — desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-[var(--color-border-strong)] px-4 py-2 text-[13px] font-medium text-[var(--color-ink-secondary)] transition-[border-color,background-color] duration-[220ms] [transition-timing-function:var(--ease-out-quart)] hover:border-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-raised)] lg:inline-flex"
            >
              {t('cta')}
            </a>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center rounded-lg p-2 text-[var(--color-ink-secondary)] transition-colors duration-[120ms] hover:bg-[var(--color-surface-recessed)] lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className="fixed inset-x-0 top-0 z-40 flex h-[100dvh] flex-col bg-[var(--color-surface-base)] pt-16 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: EASE_OUT_EXPO,
                    delay: 0.08 + i * 0.04,
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    setMobileOpen(false)
                    setTimeout(() => scrollToSection(item.id), 300)
                  }}
                  className={cn(
                    'relative border-b border-[var(--color-border-subtle)] py-4 text-[18px] transition-colors duration-[120ms] last:border-b-0',
                    active === item.id
                      ? 'font-medium text-[var(--color-ink-primary)] pl-4'
                      : 'font-normal text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]'
                  )}
                >
                  {active === item.id && (
                    <motion.div
                      layoutId="mobile-indicator"
                      className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-[1px] bg-[var(--color-ink-secondary)]"
                    />
                  )}
                  {t(item.id as Parameters<typeof t>[0])}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto border-t border-[var(--color-border-subtle)] px-6 py-6">
              {/* Language toggle — mobile */}
              <div className="mb-5">
                <LanguageToggle />
              </div>

              {/* NavCTA — mobile */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--color-border-strong)] py-3 text-[14px] font-medium text-[var(--color-ink-secondary)] transition-[border-color,background-color] duration-[220ms] [transition-timing-function:var(--ease-out-quart)] hover:border-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-raised)]"
              >
                {t('cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
