import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from '../../../auth/actions.js';
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
            {props.getAllUsersError && <div style={styles.error}>{props.getAllUsersError}</div>}
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
            getAllUsers,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);