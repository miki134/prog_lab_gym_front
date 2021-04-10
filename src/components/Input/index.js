import styles from './styles.js';
import {useState} from 'react';

const InputButton = (props) =>{
    const [hover, setHover] = useState(false);
    return (
        <input
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={{
                ...styles.button,
                ...(hover ? styles.hover : null)
            }}
           {...props}
        />
    );
}


const TextInput = (props) => {
    return (
        <div>
        <label>{props.name}</label>
        <input style={styles.textInput} {...props}/>
        </div>
    );
}

const Input = (props) => {
    if(props.type === 'button')
        return (<InputButton {...props}/>)
    else
        return (<TextInput {...props}/>)
}

export default Input;