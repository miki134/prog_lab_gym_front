import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllEquipment } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from '../../Table/styles.js';
import Error from '../../Error/index.js';

const Equipment = (props) => {
    const [isMounted, setMounted] = useState(false);
    const [downloaded, setdownloaded] = useState(false);

    if(!isMounted)
    {
        setMounted(true);
        props.getAllEquipment();
    };
    
    useEffect(() => {setdownloaded(props.getAllEquipmentActionEnded);}, [props.getAllEquipmentActionEnded]);

    let keyId = 0;
    return (
        <div style={styles.outTab}>
            {downloaded &&
                <table style={styles.styledTable}>
                    <thead style={styles.styledHeader}><tr ><th style={styles.styledHeader}>Name</th><th>Length</th><th>Height</th><th>Width</th><th>Weight</th><th>Description</th></tr></thead>
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
            {props.getAllEquipmentError && 
            <Error>{props.getAllEquipmentError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        getAllEquipmentError: state.auth.getAllEquipmentError,
        getAllEquipmentActionEnded: state.auth.getAllEquipmentActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            getAllEquipment,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);