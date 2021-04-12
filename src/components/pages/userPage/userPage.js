import { Link, Redirect } from 'react-router-dom';
import Input from '../../Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, getOneUser, setDarkMode } from '../../../auth/actions.js';
import { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error';
import './styles.css';

const UserPage = (props) => {
    const [getAllUsersIsClicked, setAllUsersClicked] = useState(false);
    const [getOneUserIsClicked, setOneUserClicked] = useState(false);

    const getAllUsers = () => {
        setAllUsersClicked(true);
        props.getAllUsers(props.token);
    }

    const redAllUsers = () => {
        if (getAllUsersIsClicked) {
            return props.getAllUsersActionEnded && (<Redirect exact to='/mypage/allusers' />);
        }
    }

    const getOneUser = () => {
        setOneUserClicked(true);
        props.getOneUser(props.token);
    }

    const redOneUser = () => {
        if (getOneUserIsClicked) {
            return props.getOneUserActionEnded && (<Redirect exact to='/mypage/update' />);
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        if (value === true)
            props.setDarkMode('tak');
        else
            props.setDarkMode('nie');
    };
    return (
        <div style={styles.container}>
            {props.token &&
                <div>
                    <Input type='button' value='Zmień dane' onClick={getOneUser} />{redOneUser()}
                    {props.role === 'admin' && 
                    <Input type='button' value='Pokaż liste użytkowników' onClick={getAllUsers} />}{redAllUsers()}
                    {props.role === 'admin' &&
                        <Link to='/panel'><Input type='button' value='Panel sterowania' /></Link>}
                    {/* <Link to='/'><Input type='button' value='asd' /></Link> */}
                    <div style={{ textAlign: 'center' }}>
                        <label>Dark mode:</label>
                        <label className="switch">
                            <input type="checkbox" checked={props.darkMode} onChange={e => handleInputChange(e)}></input>
                            <span className="slider round"></span></label>
                    </div>
                </div>

            }


            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
            {props.getAllUsersError && <Error>{props.getAllUsersError}</Error>}
            {props.getOneUserError && <Error>{props.getOneUserError}</Error>}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        role: state.auth.role,
        getAllUsersActionEnded: state.auth.getAllUsersActionEnded,
        getAllUsersError: state.auth.getAllUsersError,

        getOneUserActionEnded: state.auth.getOneUserActionEnded,
        getOneUserError: state.auth.getOneUserError,
        darkMode: state.auth.setDarkMode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllUsers,
            getOneUser,
            setDarkMode,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);