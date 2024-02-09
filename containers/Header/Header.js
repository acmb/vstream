import data from '@hooks/useData'
import NavItem from '@components/NavItem'
import Logo from '@components/Logo'
import common from '@styles/common.module.css'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <div className={`row ${common.wrapper} ${styles.header}`}>
        <div className={`col ${styles.title}`}>
          <Logo width='1.7em' gradient />
        </div>
        <div className={`col ${styles.nav}`}>
          <div className={`row`}>
            {data.header.nav.map((item, idx) => (
              <NavItem
                key={idx}
                {...item}
                idx={idx}
                {...(() => {
                  return idx === (data.header.nav.length - 1) ? {
                    shine: true
                  } : {}
                })()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
