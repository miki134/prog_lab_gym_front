import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTrainer } from '../../../auth/actions.js';
import React, { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import Input from '../../Input';
import Correct from '../../Correct'

const AddTrainers = (props) => {
    const [error, setError] = useState(false);
    const [sended, setSended] = useState(false);

    const [name, setName] = useState('');
    const [surname, setsurname] = useState('');
    const [birthday, setbirthday] = useState('');
    const [phone, setphone] = useState('');
    const [description, setdescription] = useState('');

    const handleInputChange = (e, set) => {
        console.log(birthday);
        set(e.target.value);
    };

    const handleAddTrainerClick = () => {
        setSended(false);

        if ((!name) ||
            (!surname) ||
            (!birthday) ||
            (!phone)) {
            setError(true);
        }
        else {
            setSended(true);
            setError(false);

            props.addTrainer(props.token, name, surname, birthday, phone, description);
        }
    };

    return (
        <div style={styles.container}>
            {props.token &&
                <form style={styles.update}>
                    <Input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Imie..."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                    />
                    <Input
                        type="text"
                        id="surname"
                        name="Surname"
                        placeholder="Nazwisko..."
                        value={surname}
                        onChange={e => handleInputChange(e, setsurname)}
                    />

                    <Input
                        type="date"
                        id="birthday"
                        name="Birthday"
                        placeholder="Data urodzenia..."
                        value={birthday}
                        required pattern="\d{4}-\d{2}-\d{2}"
                        onChange={e => handleInputChange(e, setbirthday)}
                    />
                    <Input
                        type="text"
                        id="phone"
                        name="Phone"
                        placeholder="Numer telefonu..."
                        value={phone}
                        onChange={e => handleInputChange(e, setphone)}
                    />
                    <Input
                        type="text"
                        id="description"
                        name="Description"
                        placeholder="Opis..."
                        value={description}
                        onChange={e => handleInputChange(e, setdescription)}
                    />
                    <Input type="button"
                        onClick={handleAddTrainerClick}
                        value="Dodaj trenera" />

                    {props.addTrainerError && sended && !props.addTrainerActionEnded &&
                        <Error>{props.addTrainerError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola poprawnie!</Error>}
                    {props.addTrainerActionEnded && sended &&
                        <Correct>Poprawnie zaktualizowano dane!</Correct>}
                </form>}

            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        token: state.auth.token,
        addTrainerError: state.auth.addTrainerError,
        addTrainerActionEnded: state.auth.addTrainerActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTrainer,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainers);