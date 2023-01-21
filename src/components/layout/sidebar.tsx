import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Layout.module.scss'

const Sidebar = () => {
    const router = useRouter()
    const path = router.pathname.split("/")[1]

  return (
    <aside className={styles.aside}>
        <Link href='dashboard' className={path === 'dashboard' ? styles.active : ''}>
            Dashboard
        </Link>
        <Link href='order' className={path === 'order' ? styles.active : ''}>
            Order
        </Link>
        <Link href='portfolio' className={path === 'portfolio' ? styles.active : ''}>
            Portfolios
        </Link>
        <Link href='market' className={path === 'market' ? styles.active : ''}>
            Market
        </Link>
    </aside>
  )
}

export default Sidebar