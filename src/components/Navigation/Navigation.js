import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from './styles.js';
import { logoutUser } from '../../auth/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home/Home.js';
import About from '../pages/About/About.js';
import Login from '../pages/Login/login.js';
import Register from '../pages/Register/register.js';
import UserPage from '../pages/userPage/userPage.js';
import AllUsers from '../pages/userPage/allUsers.js';
import UpdateUser from '../pages/userPage/updateUser.js';
import Contact from '../pages/Contact/contact.js';
import Trainers from '../pages/Trainers/trainers.js';
import DropDownList from './DropDownList.js';
import Equipment from '../pages/Equipment/Equipment.js';
import Workouts from '../pages/Workouts/workouts.js';
import Diets from '../pages/DIets/diets.js';

const NavLinkBox = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <li
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={{
                ...styles.navBox,
                ...(hover ? styles.hover : null)
            }}>
            <Link style={styles.a} {...props}></Link>
        </li>
    );
}

function Navigation(props) {
    // const [token, setToken] = useState('');

    // store.subscribe(() => setToken(store.getState().auth.token));

    // let token = props.token;
    // setToken(token);
    // console.log(token);

    // const a = () => {

    //     console.log(localStorage.getItem('token'));
    // }
    const clear = () => {
        props.logoutUser();
    }


    return (
        <div className='nav' style={styles.navigation}>
            <ul style={styles.navMenu}>
                <NavLinkBox to="/">Home</NavLinkBox>
                <DropDownList>About</DropDownList>

                {!props.token && <NavLinkBox to="/login">Sign in</NavLinkBox>}
                {!props.token && <NavLinkBox to="/join">Sign up</NavLinkBox>}

                {props.token && <Redirect to="/" />}
                {props.token && <NavLinkBox to="/mypage" >My profile</NavLinkBox>}
                {props.token && <NavLinkBox to="/" onClick={clear}>Log out</NavLinkBox>}
                <NavLinkBox to="/contact">Contact</NavLinkBox>

                {/* <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Sign in</Link>
            </li>
            <li>
                <Link to="/join">Sign up</Link>
            </li>
            <li>
                <Link to="/product?name=awesome">Product {'>'} Book</Link>
            </li>
            <li>
                <Link to="/product?name=test">Product {'>'} test </Link>
            </li> */}
            </ul>
            <div style={styles.main}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    {/* <Route exact path="/product">
                        <Product />
                    </Route> */}
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/join">
                        <Register />
                    </Route>
                    <Route exact path="/mypage">
                        <UserPage />
                    </Route>
                    <Route exact path="/mypage/allusers">
                        <AllUsers />
                    </Route>
                    <Route exact path="/mypage/update">
                        <UpdateUser />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/trainers">
                        <Trainers />
                    </Route>
                    <Route exact path="/gym">
                        <Equipment />
                    </Route>
                    <Route exact path="/workouts">
                        <Workouts />
                    </Route>
                    <Route exact path="/diets">
                        <Diets />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {};
// };

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators( 
//         // {
//         //     loginUser,
//         // },
//         dispatch,
//     );
// };


const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        data: state.auth.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            logoutUser
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// export default Navigation;