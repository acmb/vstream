import useShine from '@hooks/useShine'
import common from '@styles/common.module.css'
import styles from './NavItem.module.css'

export default function NavItem({ label, href, highlight = false, shine = false }) {
  const [activate] = useShine()
  return (
    <>
      <a href={href} className={[
        'col',
        styles.nav_item,
        highlight ? styles.highlight : "",
        shine ? "" : common.gradient_text_hover,
        shine ? "shine" : "",
        activate ? "activate" : ""
      ].join(" ")}>
        {label}
      </a>
    </>
  )
}
