import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, updateUser } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import Input from '../../Input';
import Correct from '../../Correct'

const SelectUser = (props) => {
    const [value, setvalue] = useState('default1');
    const [sended, setSended] = useState(false);
    const [error, setError] = useState(false);

    const [name, setName] = useState(props.data[0]);
    const [surname, setSurname] = useState(props.data[1]);
    const [email, setemail] = useState(props.data[1]);
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(props.data[3]);

    const [isMounted, setMounted] = useState(false);
    const [downloaded, setdownloaded] = useState(false);
    const [abc, setabc] = useState(false);

    const [updateUser, setUpdateUser] = useState(false);

    const [changeName, setChangeName] = useState(true);
    const [changeSurname, setChangeSurname] = useState(true);
    const [changePassword, setChangePassword] = useState(true);
    const [changeRole, setChangeRole] = useState(true);

    if (!isMounted) {
        setMounted(true);
        setdownloaded(false);
        props.getAllUsers(props.token);
    };

    useEffect(() => { setdownloaded(props.getAllUsersActionEnded); }, [props.getAllUsersActionEnded]);
    useEffect(() => { props.getAllUsers(props.token); }, [props.updateUserActionEnded]);

    const handleInputChange = (e, set) => {
        set(e.target.value);
    };

    const handleChange = (event) => {
        setvalue(event.target.value);
        // console.log(event.target.value);
        // console.log(props.data);
        setName(props.data[event.target.value][0]);
        setSurname(props.data[event.target.value][1]);
        setemail(props.data[event.target.value][2]);
        setRole(props.data[event.target.value][3]);


        setUpdateUser(true);
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

            props.updateUser(props.token, name, surname, email, password, role);
        }
    };

    let keyId = -1;
    console.log(keyId);
    return (
        <div>
            {props.role === 'admin' && downloaded &&
                <form>
                    <select style={styles.optionInput} value={value} onChange={handleChange}>
                        <option value="default">Wybierz opcje...</option>
                        {props.data.map(item => {
                            return (<option value={++keyId} key={keyId}>Name: {item[0]} Email: {item[2]}</option>)
                        })}
                    </select>
                </form>}
            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
            {props.getAllUsersError && <Error>{props.getAllUsersError}</Error>}
            {updateUser &&
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
                    {/* {
                        props.updateUserActionEnded &&
                        setMounted(false)
                    } */}
                </form>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        role: state.auth.role,
        token: state.auth.token,
        getAllUsersError: state.auth.getAllUsersError,
        getAllUsersActionEnded: state.auth.getAllUsersActionEnded,

        updateUserError: state.auth.updateUserError,
        updateUserActionEnded: state.auth.updateUserActionEnded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllUsers,
            updateUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser);