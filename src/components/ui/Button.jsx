import Icon from './Icons.jsx'
import './Button.css'

/* ==========================================================================
   Button: website ke saare buttons yahi se banenge.

   variant:  'accent' (cyan gradient), 'light' (safed), 'lime' (hara-peela)
   size:     'md' (default), 'sm'
   icon:     Icons.jsx ka naam, jaise 'arrow-up-right' (gol dabbe mein dikhta hai)
   href:     diya ho to <a> link banta hai, warna <button>

   Misaal:
     <Button href="#demos" icon="arrow-up-right">Explore Demos</Button>
     <Button variant="light" href="https://..." size="sm">Buy now</Button>
   ========================================================================== */

export default function Button({
  children,
  href,
  variant = 'accent',
  size = 'md',
  icon,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon ? (
        <span className="btn__icon">
          <Icon name={icon} size={16} strokeWidth={2} />
        </span>
      ) : null}
    </>
  )

  if (href) {
    // http/https se shuru hone wale links naye tab mein khulte hain
    const isExternal = /^https?:\/\//i.test(href)
    const externalProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

    return (
      <a href={href} className={classes} onClick={onClick} {...externalProps} {...rest}>
        {content}
        {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}