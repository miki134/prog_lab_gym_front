import TextInput from './TextInput.js';
import InputButton from './InputButton.js';

const Input = (props) => {
    if(props.type === 'button')
        return (<InputButton {...props}/>)
    else
        return (<TextInput {...props}/>)
}

export default Input;