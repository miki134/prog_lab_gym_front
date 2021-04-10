import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../../auth/actions.js';
import Input from "../../Input";
import styles from './styles.js';
import Error from '../../Error';
import Correct from '../../Correct/index.js';

const Register = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [sended, setSended] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e, set) => {
        set(e.target.value);
    };

    const handleRegisterClick = () => {
        if (!name || !surname || !email || !password) {
            setError(true);
        }
        else {
            setSended(true);
            setError(false);

            props.registerUser(name, surname, email, password);
        }
    };
    return (
        <div style={styles.container}>
            {!props.token &&
                <form style={styles.register}>
                    <Input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Your name.."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                    />
                    <Input
                        type="text"
                        id="Surname"
                        name="Surname"
                        placeholder="Your last name.."
                        value={surname}
                        onChange={e => handleInputChange(e, setSurname)}
                    />
                    <Input
                        type="text"
                        id="Email"
                        name="Email"
                        placeholder="Wprowadz mail"
                        value={email}
                        onChange={e => handleInputChange(e, setEmail)}
                    />
                    <Input
                        type="Password"
                        id="Password"
                        name="Password"
                        placeholder="Password"
                        value={password}
                        onChange={e => handleInputChange(e, setPassword)}
                    />
                    <Input type="button" onClick={handleRegisterClick} value="Zarejestruj" />
                    {props.registerError && sended &&
                        <Error>{props.registerError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola!</Error>}
                </form>}

            {props.token &&
                <Correct>Jestes już zalogowany</Correct>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        registerError: state.auth.registerError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            registerUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);