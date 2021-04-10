import styles from './styles.js';


const Correct = (props) => {
    return (
        <div style={styles.correct}>{props.children}</div>
    );
}

export default Correct;