import React from 'react';
import styles from '../../styles/reusable.module.css';

interface Icard{
  date:Date,
imgUrl:String,
title:String
}
const Card:React.FC<Icard> = ({date,imgUrl,title}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <div
          className={styles.cardImg}
          style={{backgroundImage: `url(${imgUrl})`}}
        ></div>
        <div className={styles.cardTitle}>
          <p>
          {date}
          </p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
