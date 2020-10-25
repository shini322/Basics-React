import React from 'react';
import Input from '../Input/Input'
const Form = (props) => {
    return(
        <form action="../mailer.smart.php" className="contact-form">
            <Input typer={'text'} placeholder={'Ваше имя'}/>
            <Input typer={'tel'} placeholder={'Телефон'}/>
            <Input typer={'email'} placeholder={'E-mail'}/>
            <button className="btn contact-btn"><span>Позвоните мне</span></button>
        </form>
    )
}

export default Form;