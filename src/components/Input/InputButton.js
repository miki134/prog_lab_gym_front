import styles from './styles.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useState } from 'react';

const InputButton = (props) => {
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
                ...(hover ? styles.hover : null),
                ...(props.darkmode==='tak' ? styles.ButtonDarkMode : null)
            }}
            {...props}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(InputButton);
