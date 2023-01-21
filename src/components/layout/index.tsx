import React from 'react'
import { Header } from './header'
import Sidebar from './sidebar'
import styles from '@/styles/Layout.module.scss'

export const Layout = ({children}: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.sidebarMain}>
        <Sidebar />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}
