import styles from "./styles";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../../../auth/actions.js';
import Input from "../../Input";
import Error from '../../Error';
import Correct from '../../Correct/index.js';

const UpdateUser = (props) => {
    const [name, setName] = useState(props.data[0]);
    const [surname, setSurname] = useState(props.data[1]);
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(props.data[3]);

    const [changeName, setChangeName] = useState(true);
    const [changeSurname, setChangeSurname] = useState(true);
    const [changePassword, setChangePassword] = useState(true);
    const [changeRole, setChangeRole] = useState(true);

    const [sended, setSended] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e, set) => {
        set(e.target.value);
    };

    const handleUpdateUserClick = () => {
        if ((!changeName && !name) ||
            (!changeSurname && !surname) ||
            (!changePassword && !password) ||
            (!changeRole && !role)) {
            setError(true);
        }
        else {
            setSended(true);
            setError(false);

            props.updateUser(props.token, name, surname, props.data[2], password, role);
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
                        placeholder="Your name.."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                        disabled={changeName} />
                    <Input
                        type="button"
                        onClick={e => setChangeName(!changeName)}
                        value="Zmień imie" />
                    <Input
                        type="text"
                        id="Surname"
                        name="Surname"
                        placeholder="Your last name.."
                        value={surname}
                        onChange={e => handleInputChange(e, setSurname)}
                        disabled={changeSurname} />
                    <Input
                        type="button"
                        onClick={e => setChangeSurname(!changeSurname)}
                        value="Zmień nazwisko" />
                    <Input
                        type="Password"
                        id="Password"
                        name="Password"
                        placeholder="Password"
                        value={password}
                        onChange={e => handleInputChange(e, setPassword)}
                        disabled={changePassword} />
                    <Input
                        type="button"
                        onClick={e => setChangePassword(!changePassword)}
                        value="Zmień haslo" />

                    <Input
                        type="text"
                        id="role"
                        name="Role"
                        placeholder="Your role..."
                        value={role}
                        onChange={e => handleInputChange(e, setRole)}
                        disabled={changeRole} />
                    <Input
                        type="button"
                        onClick={e => setChangeRole(!changeRole)}
                        value="Zmień uprawnienia" />

                    <Input type="button"
                        onClick={handleUpdateUserClick}
                        value="Zatwierdź" />
                    {props.updateUserError && sended && !props.updateUserActionEnded &&
                        <Error>{props.updateUserError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola!</Error>}
                    {props.updateUserActionEnded &&
                        <Correct>Poprawnie zaktualizowano dane!</Correct>}
                </form>}


            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        updateUserError: state.auth.updateUserError,
        data: state.auth.data,
        updateUserActionEnded: state.auth.updateUserActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);