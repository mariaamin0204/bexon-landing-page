import { useEffect, useState } from 'react'
import Icon from '../ui/Icons.jsx'
import { BRAND, NAV_LINKS } from '../../data/content.js'
import './Header.css'

/* ==========================================================================
   Header: logo (left) aur menu (beech mein).
   - Sab se upar: transparent, neeche dashed lakeer (reference jaisa).
   - Scroll karne par: gehra blur wala background.
   - Chhoti screen par: menu button, jo dropdown menu kholta hai.
   ========================================================================== */

const DESKTOP_QUERY = '(min-width: 992px)'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 24,
  )
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  /* Scroll hone par header ka background badlo */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Menu khula ho: Escape se band ho, aur peeche ka page scroll na ho */
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  /* Screen bari ho jaye (desktop) to mobile menu khud band ho jaye */
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event) => {
      if (event.matches) setIsOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const classes = [
    'header',
    isScrolled ? 'is-scrolled' : '',
    isOpen ? 'is-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <div className="header__inner">
        <a
          className="header__logo"
          href="#top"
          onClick={closeMenu}
          aria-label={`${BRAND.name} home`}
        >
          <Icon name="logo" size={44} className="header__logo-icon" />
          <span className="header__brand">{BRAND.name}</span>
        </a>

        <nav id="primary-nav" className="header__nav" aria-label="Primary">
          <ul className="header__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="header__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={24} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  )
}