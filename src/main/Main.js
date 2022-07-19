import React from "react";
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Всем привет</span>
                    <h1>Меня зовут Дмитрий</h1>
                    <p> Я Frontend developer </p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
