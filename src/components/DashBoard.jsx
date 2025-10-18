import React from "react";
import styles from './dashBoard.module.css'

const DashBoard = () => {
    return (
        <div className={styles.dashBoard}>
            <header>
                <div className={styles.logo}>
                    <img src="" alt=""/>
                </div>

                <div className={styles.options}>
                    <span>Home</span>
                    <span>Home</span>
                    <span>Home</span>
                    <span>Home</span>
                </div>
            </header>

        </div>
    )
}

export default DashBoard;