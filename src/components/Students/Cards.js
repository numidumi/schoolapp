import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.color}
        style={{ backgroundColor: `${props.colors}` }}
      ></div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div
          className={styles.flag}
          style={{ backgroundImage: `url(${props.flag})` }}
        ></div>
      </div>
      <div className={styles.name}>
        <p>
          {props.name} {props.lastName}
        </p>
      </div>
      <div className={styles.desc}>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Cards;
