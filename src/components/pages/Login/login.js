import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../../auth/actions.js';
import Input from '../../Input';
import styles from './styles.js';
import Error from '../../Error';
import Correct from '../../Correct/index.js';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [sended, setSended] = useState(false);
    const [error, setError] = useState(false);
    // const [redirect, setred] = useState(false);

    // const [error, setError] = useState('');
    // const [token, setToken] = useState('')
    // const history = useHistory();

    // store.subscribe(() => setError(store.getState().auth.error));
    // store.subscribe(() => setToken(store.getState().auth.token));

    // console.log(props);
    //setToken('aaaaa');
    // // console.log(token);
    // useEffect(() => {setred(props.loginActionEnded);}, []);

    // console.log(props.loginActionEnded);
    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };
    console.log("props.loginActionEnded",props.loginActionEnded);

    const handleLoginClick = () => {
        if (!email || !password) {
            setError(true);
        }
        else {
            setSended(true);
            setError(false);
            props.loginUser(email, password);
        }
    };


    // const handleLoginClick = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await api.login(email, password);
    //         // setToken(response.token);
    //         console.log(response.token);
    //         // test.t = response.token;
    //         // console.log(test);

    //         // setToken(response.token);
    //         localStorage.setItem('token', response.token);

    //         tok = response.token;
    //         console.log(tok);

    //         // console.log(token);
    //         if (response.token)
    //             history.push("/login?s");
    //         // this.context.history.push('/asd');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const a = () => {
    //     // if(token)
    //     // {
    //     //     console.log('aasd');

    //     // }
    // }
    return (
        <div style={styles.container}>
            {!props.token &&
                <form style={styles.login}>
                    <Input type="text"
                        id={'Email'}
                        name={'Email'}
                        placeholder={'Wprowadz Email'}
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)} />

                    <Input type={"Password"}
                        id={"Password"}
                        name={"Password"}
                        placeholder={"Wprowadz haslo"}
                        value={password}
                        onChange={(e) => handleInputChange(e, setPassword)} />

                    <Input type="button" onClick={handleLoginClick} value="Zaloguj" />
                    
                    {props.loginActionEnded &&
                        <Redirect to='/' />}

                    {props.loginError && sended &&
                        <Error>{props.loginError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola!</Error>}
                </form >
            }
            {props.token &&
                <Correct>Jestes już zalogowany</Correct>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        token: state.auth.token,
        loginError: state.auth.loginError,
        loginActionEnded: state.auth.loginActionEnded,
        role: state.auth.role,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            loginUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);