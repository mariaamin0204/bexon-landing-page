import './ShotPlaceholder.css'

/* ==========================================================================
   ShotPlaceholder: website screenshot ki jagah CSS se bani chhoti nakli
   website. Asli screenshots aap ke paas nahi hain, is liye ye placeholder
   hai. Baad mein asli image lagani ho to sirf is component ki jagah <img>
   laga dena, baqi layout nahi badlega.

   Props:
     tone     1 se 4: rang ka style (1 light+teal, 2 dark, 3 teal, 4 safed)
     variant  'home' (hero + cards) ya 'inner' (heading + tiles ki grid)
     label    screen-reader ke liye naam, jaise "Homepage 01 preview"
   ========================================================================== */

export default function ShotPlaceholder({
  tone = 1,
  variant = 'home',
  label = 'Website preview placeholder',
  className = '',
}) {
  const classes = `shot shot--tone-${tone} shot--${variant} ${className}`.trim()

  return (
    <div className={classes} role="img" aria-label={label}>
      {/* Chhoti si nakli header bar */}
      <div className="shot__bar" aria-hidden="true">
        <span className="shot__logo" />
        <span className="shot__nav">
          <i />
          <i />
          <i />
        </span>
        <span className="shot__pill" />
      </div>

      {variant === 'inner' ? (
        <div className="shot__body shot__body--inner" aria-hidden="true">
          <span className="shot__line shot__line--title" />
          <span className="shot__line shot__line--sub" />
          <div className="shot__tiles">
            <span className="shot__tile" />
            <span className="shot__tile" />
            <span className="shot__tile" />
            <span className="shot__tile" />
            <span className="shot__tile" />
            <span className="shot__tile" />
          </div>
        </div>
      ) : (
        <div className="shot__body shot__body--home" aria-hidden="true">
          <div className="shot__hero">
            <div className="shot__copy">
              <span className="shot__line shot__line--title" />
              <span className="shot__line shot__line--title shot__line--short" />
              <span className="shot__line shot__line--sub" />
              <span className="shot__cta" />
            </div>
            <span className="shot__photo" />
          </div>
          <div className="shot__cards">
            <span className="shot__card" />
            <span className="shot__card" />
            <span className="shot__card" />
          </div>
        </div>
      )}
    </div>
  )
}