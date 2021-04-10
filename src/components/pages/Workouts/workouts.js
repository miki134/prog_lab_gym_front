import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllWorkouts } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from '../../Table/styles.js';
import Error from '../../Error/index.js';

const Workouts = (props) => {
    const [isMounted, setMounted] = useState(false);
    const [downloaded, setdownloaded] = useState(false);
    console.log('asdas');
    if(!isMounted)
    {
        setMounted(true);
        props.getAllWorkouts();
    };
    
    useEffect(() => {setdownloaded(props.getAllWorkoutsActionEnded);}, [props.getAllWorkoutsActionEnded]);

    let keyId = 0;
    return (
        <div style={styles.outTab}>
            {downloaded &&
                <table style={styles.styledTable}>
                    <thead style={styles.styledHeader}><tr ><th style={styles.styledHeader}>Name</th><th>Length Of Time</th><th>Quantity Of Exercises</th><th>Difficulty</th><th>Description</th></tr></thead>
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
            {props.getAllWorkoutsError && 
            <Error>{props.getAllWorkoutsError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        getAllWorkoutsError: state.auth.getAllWorkoutsError,
        getAllWorkoutsActionEnded: state.auth.getAllWorkoutsActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllWorkouts,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Workouts);