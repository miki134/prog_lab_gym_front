import styles from './styles.js';


const Error = (props) => {
    return (
        <div style={styles.error}>{props.children}</div>
    );
}

export default Error;