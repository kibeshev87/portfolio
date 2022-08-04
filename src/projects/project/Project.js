import React from "react";
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.discription}>{props.discription}</span>
        </div>
    );
}

export default Project;
