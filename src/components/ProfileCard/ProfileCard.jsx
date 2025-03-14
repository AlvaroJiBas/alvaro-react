import React from "react";
import styles from "./ProfileCard.module.css"
const ProfileCard = ({id, nombre, edad, bio, profileImage }) => {

  return (    
        <div id ={id} className={styles.card}>
          <img src={profileImage} className={styles.image}/>
            <div className={styles.info}>
        
            <h1 className={styles.nombre}> {nombre}</h1>
            <p className={styles.edad}> Edad: {edad}</p>
     
            <p className={styles.bio}> {bio}</p>
            </div>
        
        </div>
    )
}
export default ProfileCard;

