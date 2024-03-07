import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import clsx from 'clsx'
import styles from './styles.module.css'
import Translate, { translate } from '@docusaurus/Translate'

const BACKGROUNDS = [styles.backgroundOrange, styles.backgroundRed]

function PoleStarChat({ position }) {
  return (
    <a className={clsx(styles.container, styles.backgroundPurple)}>
      <p className={styles.tagline}>
        <strong className={styles.title}>
          <Translate>blank</Translate>
        </strong>
        <Translate>blank</Translate>
      </p>
    </a>
  )
}

export default React.memo(function SidebarAd({ position }) {
  return (
    <BrowserOnly>
      {() => {
        const path = window.location.pathname
        return <PoleStarChat position={position} />
      }}
    </BrowserOnly>
  )
})
