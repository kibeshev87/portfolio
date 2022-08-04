import React from "react";
import style from './Сontacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Contact from "./contact/Contact";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <Contact/>
                </div>
                <h2 className={style.title}>Send</h2>
            </div>
        </div>
    );
}

export default Contacts;
