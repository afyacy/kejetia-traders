import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/styles/Layout.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.bars}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </button>
      <Link href="dashboard">
        <Image 
          src="/assets/images/logo-black.png" 
          alt="logo" 
          width={150} 
          height={50}
          priority
          className={styles.logo}
        />
      </Link>
      <div className={styles.icons}>
          <Link href="#">
              <Image 
                src="/assets/icons/notifications.svg" 
                alt="notification" 
                width={20} 
                height={20} 
                className={styles.image}
              />
          </Link>
          <Link href="#">
              <Image 
                src="/assets/icons/settings.svg" 
                alt="settings" 
                width={20} 
                height={20}
                className={styles.image}
              />
          </Link>
          <Link href="/dashboard/client/profile">
              <Image 
                src="/assets/icons/user.svg" 
                alt="profile"
                width={40} 
                height={40}
                className={styles.image}
              />
          </Link>
      </div>
    </header>
  )
}
