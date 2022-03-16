import React,{useContext} from 'react'
import styles from '../../styles/layout.module.css'
import LogoBlack from '../../public/logo-black.webp'
import LogoWhite from '../../public/logo-white.webp'

import Image from 'next/image'
import { WindowScroll } from '../../context'
const Header:React.FC = () => {
    const windowScroll = useContext(WindowScroll);
    console.log(windowScroll);
  return (
    <div className={ windowScroll? styles.headerContainer1:styles.headerContainer}>
        <div className={styles.headerContent}>
            <div className={styles.headerImg}>
                <Image src={ windowScroll?LogoBlack:LogoWhite} alt="header"/>

            </div>
            <div className={styles.headerBody}>
                <span>Explore</span>
                <span>Places</span>
                <span>Blog</span>
                <span>About Us</span>
            </div>
            <div className={styles.headerSearch}>
                Search
            </div>
        </div>


    </div>
  )
}

export default Header