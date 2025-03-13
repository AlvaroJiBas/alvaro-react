import React from "react";
import styles from "./ProfileCard.module.css"
const ProfileCard = ({ nombre, edad, bio, profileImage }) => {

  return (    
        <div className={styles.card}>

        <h1 className={styles.nombre}> {nombre}</h1>
        <p className={styles.edad}> Edad: {edad}</p>
        <img src={profileImage} className={styles.image}/>
        <p className={styles.bio}> {bio}</p>
        </div>
    )
}
export default ProfileCard;

