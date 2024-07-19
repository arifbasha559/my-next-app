"use client"
import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({item}) => {
    const path = usePathname()
  return (
    <div>
        <Link className={`${styles.link} ${path === item.path?styles.active:""}`} href={item.path}>{item.title}</Link>
    </div>
  )
}

export default NavLink