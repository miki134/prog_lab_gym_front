import styles from './styles.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const TextInput = (props) => {
    // let dark=;
    return (
        <div>
        <label>{props.name}</label>
        <input 
         style={{
            ...styles.textInput,
            ...(props.darkmode==='tak' ? styles.TextInputDarkMode : '')
        }}
         {...props}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        data: state.auth.data,
        darkmode: state.auth.setdarkmode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
