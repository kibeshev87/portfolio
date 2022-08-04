import React from "react";
import style from './Contact.module.css';

function Contact() {
    return (
        <div className={style.contact}>
            <form action="#" method='post'>
                <div>
                    <p>Имя</p>
                    <input placeholder='Как вас зовут' type="text" name='userName'/>
                </div>
                <div>
                    <p>Телефон</p>
                    <input placeholder='Ваш телефон' type="tel" name='userPhone'/>
                </div>
                <div>
                    <p>Дополнительная информация</p>
                    <textarea placeholder='Дополнительная информация' name="text"></textarea>
                </div>
            </form>
        </div>
    );
}

export default Contact;
