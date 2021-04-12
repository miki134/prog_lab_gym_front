import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Error from '../../Error/index.js';
import styles from './styles.js';

const AllUsers = (props) => {
    let keyId = 0;

    return (
        <div style={styles.outTab}>
            {props.token && <table style={styles.styledTable}>
                <thead style={styles.styledHeader}><tr ><th style={styles.styledHeader}>Name</th><th>Surname</th><th>Email</th><th>Role</th></tr></thead>
                <tbody style={styles.styledBody}>
                    {props.data.map(item => {
                        return (<tr key={++keyId} >{item.map(it => {
                            return (<td key={++keyId} style={styles.styledCells}>{it}</td>)
                        })}
                        </tr>)
                    })}
                </tbody>
            </table>}
            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
            {props.getAllUsersError && <Error>{props.getAllUsersError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        token: state.auth.token,
        getAllUsersError: state.auth.getAllUsersError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);