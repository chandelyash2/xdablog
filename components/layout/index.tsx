import React from 'react'
import  Header  from './header'
import Footer from './footer'
import styles from '../../styles/layout.module.css'
interface ILayout{
    children:JSX.Element
}
const Layout:React.FC<ILayout>= ({children}) => {
  return (
    <div className={styles.layoutContainer}>
<Header/>
{children}
<Footer/>
    </div>
  )
}

export default Layout