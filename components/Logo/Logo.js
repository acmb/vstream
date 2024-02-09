import Link from 'next/link'

import styles from './Logo.module.css'

import LogoSVG from 'public/logo.svg'

function Logo({ gradient, width }) {
  return (
    <Link
      href="/"
      // className={`${common.gradient_text_hover}`}
    >
      <div className={[styles.logo, gradient ? styles.gradient : ""].join(" ")} style={{ width }}>
        <LogoSVG width="100%" />
      </div>
    </Link>
  )
}

export default ({ gradient = false, width = '1em', iconOnly = false }) => {
  return (
    <>
      {iconOnly ? (
        <Logo gradient={gradient} width={width} />
      ) : (
        <div className={`row ${styles.logo_expanded}`} style={{ fontSize: width }}>
          <Logo gradient={gradient} width={width} />
          vstream
        </div>
      )}
    </>
  )
}
