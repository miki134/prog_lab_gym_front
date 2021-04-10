import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.js';



const DropDownButton = (props) => {
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
                ...styles.dropdownItem,
                ...(hover ? styles.hover : null)
            }}>
            <Link style={styles.a} {...props}></Link>
        </li>
    );
}

const DropDownList = (props) => {
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
            <Link to='#' style={styles.a} {...props}></Link>
            <ol
                style={{
                    ...styles.dropdown,
                    ...styles.hide,
                    ...(hover ? styles.show : null)
                }}>
                <DropDownButton to='/workouts'>Treningi</DropDownButton>
                <DropDownButton to='/diets'>Diety</DropDownButton>
                <DropDownButton to='/gym'>Sprzęt</DropDownButton>
                <DropDownButton to='/trainers' >Trenerzy</DropDownButton>
            </ol>
        </li>
    );
}

export default DropDownList;