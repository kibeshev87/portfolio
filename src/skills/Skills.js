import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} discription={'Изучаю Js. Изучаю Js. Изучаю Js. Изучаю Js'}/>
                    <Skill title={'CSS'} discription={'Учу CSS. Учу CSS. Учу CSS. Учу CSS. Учу CSS.  '}/>
                    <Skill title={'React'} discription={'React рулит. React рулит. React рулит. React рулит. '}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
