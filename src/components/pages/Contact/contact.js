import React, { useState } from 'react';
import Error from '../../Error';
import Correct from '../../Correct';
import Input from '../../Input';
import styles from './styles';

export default function Contact() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [sended, setSended] = useState(false);
    const [error, setError] = useState(false);


    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleLoginClick = () => {
        if (!name || !surname || !email || !message) {
            setError(true)
            setSended(false);
        }
        else {
            setSended(true);
            setError(false);
        }
    };

    return (
        <div style={styles.main}>
            <Input type="text"
                id={'name'}
                name={'Name'}
                placeholder={'Wprowadz imie'}
                value={name}
                onChange={(e) => handleInputChange(e, setName)} />
            <Input type={"text"}
                id={"surname"}
                name={"Surname"}
                placeholder={"Wprowadz nazwisko"}
                value={surname}
                onChange={(e) => handleInputChange(e, setSurname)} />
            <Input type={"text"}
                id={"email"}
                name={"Email"}
                placeholder={"Wprowadz email"}
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)} />
            <label>Wiadomosc</label>
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <textarea style={styles.textArea}
                    cols="30" rows="5"
                    id="message"
                    name="message"
                    placeholder="Napisz wiadomosc :)"
                    value={message}
                    onChange={(e) => handleInputChange(e, setMessage)}
                ></textarea>
            </div>
            <Input
                type="button"
                value="Wyślij"
                onClick={handleLoginClick}
            />

            {sended &&
                <Correct>Wyslano wiadomosc</Correct>
            }

            {error &&
                <Error>Wypelnij wszystkie pola!</Error>
            }
        </div>
    );
}