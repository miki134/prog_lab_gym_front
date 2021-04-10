import { Link, Redirect } from 'react-router-dom';
import Input from '../../Input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers, getOneUser } from '../../../auth/actions.js';
import { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error';

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
        if(getOneUserIsClicked){
            return props.getOneUserActionEnded && (<Redirect exact to='/mypage/update' />);
        }
    }

    return (
        <div style={styles.container}>
            {props.token &&
                <div>
                    <Input type='button' value='Pokaż liste użytkowników' onClick={getAllUsers} />{redAllUsers()}
                    <Input type='button' value='Zmień dane' onClick={getOneUser} />{redOneUser()}
                    <Link to='/mypage/update'><Input type='button' value='Zmień dane' /></Link>
                    <Link to='/'><Input type='button' value='asd' /></Link>
                </div>
            }
            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.auth.token,
        error: state.auth.error,
        getAllUsersActionEnded: state.auth.getAllUsersActionEnded,
        getAllUsersError: state.auth.getAllUsersError,

        getOneUserActionEnded: state.auth.getOneUserActionEnded,
        getOneUserError: state.auth.getOneUserError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllUsers,
            getOneUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);