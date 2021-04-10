import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllDiets } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from '../../Table/styles.js';
import Error from '../../Error/index.js';

const Diets = (props) => {
    const [isMounted, setMounted] = useState(false);
    const [downloaded, setdownloaded] = useState(false);
    console.log('asdas');
    if(!isMounted)
    {
        setMounted(true);
        props.getAllDiets();
    };
    
    useEffect(() => {setdownloaded(props.getAllDietsActionEnded);}, [props.getAllDietsActionEnded]);

    let keyId = 0;
    return (
        <div style={styles.outTab}>
            {downloaded &&
                <table style={styles.styledTable}>
                    <thead style={styles.styledHeader}><tr ><th style={styles.styledHeader}>Name</th><th>Quantity Of Products</th><th>Number Of Meals Per Day</th><th>meat</th><th>Description</th></tr></thead>
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
            {props.getAllDietsError && 
            <Error>{props.getAllDietsError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        getAllDietsError: state.auth.getAllDietsError,
        getAllDietsActionEnded: state.auth.getAllDietsActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllDiets,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Diets);