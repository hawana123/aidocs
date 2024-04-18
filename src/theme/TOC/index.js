import React from 'react'
import clsx from 'clsx'
import TOCItems from '@theme/TOCItems'
import styles from './styles.module.css' // Using a custom className
import SidebarAd from '../../components/SidebarAd'
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight'
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active'

function TOC({ className, ...props }) {
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <div className={clsx(styles.adsense, 'margin--md')}>
          <script async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7361597277581518"
                  crossOrigin="anonymous"></script>
          <ins className="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7361597277581518"
               data-ad-slot="1290343947"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
      </div>
      <h3
        className="padding-left--md padding-top--md margin-bottom--none"
        style={{
          textTransform: 'uppercase',
          fontSize: '0.75em',
          color: 'var(--ifm-color-emphasis-700)',
          letterSpacing: '0.5px',
        }}
      >
        Table of Contents
      </h3>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  )
}

export default TOC
