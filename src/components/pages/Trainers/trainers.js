import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllTrainers } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';

const Trainers = (props) => {
    const [isMounted, setMounted] = useState(false);
    const [downloaded, setdownloaded] = useState(false);

    if(!isMounted)
    {
        setMounted(true);
        props.getAllTrainers();
    };
    
    useEffect(() => {setdownloaded(props.getAllTrainersActionEnded);}, [props.getAllTrainersActionEnded]);

    let keyId = 0;
    return (
        <div style={styles.outTab}>
            {downloaded &&
                <table style={styles.styledTable}>
                    <thead style={styles.styledHeader}><tr ><th style={styles.styledHeader}>Name</th><th>Surname</th><th>Birthday</th><th>Phone</th><th>Description</th></tr></thead>
                    <tbody style={styles.styledBody}>
                        {props.data.map(item => {
                            return (<tr key={++keyId} >{item.map(it => {
                                return (<td key={++keyId} style={styles.styledCells}>{it}</td>)
                            })}
                            </tr>)
                        })}
                    </tbody>
                </table>
            }
            {props.getAllTrainersError && 
            <Error>{props.getAllTrainersError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        getAllTrainersError: state.auth.getAllTrainersError,
        getAllTrainersActionEnded: state.auth.getAllTrainersActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllTrainers,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);