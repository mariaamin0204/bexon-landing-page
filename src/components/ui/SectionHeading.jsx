import Icon from './Icons.jsx'
import useReveal from '../../hooks/useReveal.js'
import './SectionHeading.css'

/* ==========================================================================
   SectionHeading: har section ke upar wala hissa
     [ badge ]  →  bada heading (highlight word ke gird ellipse)  →  chhota text

   Props:
     badge        chhota label, jaise "Pre-built homepages"
     titleBefore  heading ka pehla hissa
     highlight    wo lafz jis ke gird ellipse banta hai, jaise "11+"
     titleAfter   heading ka baaqi hissa
     title        agar highlight nahi chahiye to sirf title do
     text         heading ke neeche chhota paragraph
     theme        'light' (safed section) ya 'dark' (dark section)
     align        'center' ya 'left'
     as           heading ka tag: 'h2' (default) ya 'h3'

   Ye khud useReveal chalata hai, is liye kisi bhi section mein akela bhi
   fade-in animation ke saath theek kaam karega.
   ========================================================================== */

export default function SectionHeading({
  badge,
  titleBefore,
  highlight,
  titleAfter,
  title,
  text,
  theme = 'light',
  align = 'center',
  as: Tag = 'h2',
  className = '',
}) {
  const ref = useReveal()

  return (
    <header
      ref={ref}
      className={`sh sh--${theme} sh--${align} ${className}`.trim()}
    >
      {badge ? (
        <span className="sh__badge reveal">
          <Icon name="logo" size={14} />
          <span>{badge}</span>
        </span>
      ) : null}

      <Tag
        className="sh__title reveal"
        style={{ '--reveal-delay': '0.08s' }}
      >
        {highlight ? (
          <>
            {titleBefore}{' '}
            <span className="sh__highlight">
              {highlight}
              <svg
                className="sh__ellipse"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <ellipse cx="50" cy="25" rx="48" ry="22" />
              </svg>
            </span>{' '}
            {titleAfter}
          </>
        ) : (
          title
        )}
      </Tag>

      {text ? (
        <p className="sh__text reveal" style={{ '--reveal-delay': '0.16s' }}>
          {text}
        </p>
      ) : null}
    </header>
  )
}