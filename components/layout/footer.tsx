import React from 'react'
import styles from '../../styles/layout.module.css'
import Instagram from '../../public/instagram.png'
import Facebook from '../../public/facebook.png'
import Twitter from '../../public/twitter.png'
import Image from 'next/image'

const Footer:React.FC = () => {
  return (
    <div className={styles.footerContainer}>
       <div className={styles.footerBody}>
         <div className={styles.footerBodyLeft}>
         <p>© 2022 Anywhere We Roam. All rights reserved
</p>
         </div>
    
<div className={styles.footerBodyRight}>
  <span><Image src={Instagram} width="25px" height="25px" alt="Instagram"/>
</span>
<span><Image src={Facebook} width="25px" height="25px" alt="Facebook"/>
</span>
<span><Image src={Twitter} width="25px" height="25px" alt='Twitter'/>
</span>
</div>

       </div>
    </div>
  )
}

export default Footer