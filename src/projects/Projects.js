import React from "react";
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             discription={'Этот проект позволяет создавать Тодулисты и таски с запросом на сервер'}/>
                    <Project title={'Social Network'}
                             discription={'Это первый проект. Знакомство с Реактом.'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
