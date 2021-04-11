import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getAllPanel } from '../../../auth/actions.js';s
import React, { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import AddWorkouts from './AddWorkouts.js';
import AddDiets from './AddDiets.js';

const Panel = (props) => {
    const [isMounted, setMounted] = useState(false);
    // const [downloaded, setdownloaded] = useState(false);
    // const [firstClick, setFirstClick] = useState(false);

    const [addWorkouts, setAddWorkouts] = useState(false);
    const [addDiets, setAddDiets] = useState(false);
    const [addEquipment, setAddEquipment] = useState(false);
    const [addTrainers, setAddTrainers] = useState(false);


    const [value, setValue] = useState('default');

    // useEffect(() => { setdownloaded(props.getAllPanelActionEnded); }, [props.getAllPanelActionEnded]);

    if (!isMounted) {
        setMounted(true);
        // props.getAllPanel();
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setAddWorkouts(false);
        setAddDiets(false);
        setAddEquipment(false);
        setAddTrainers(false);

        switch (event.target.value) {
            case 'addWorkouts':
                setAddWorkouts(true);
                break;
            case 'addDiets':
                setAddDiets(true);
                break;
            case 'addEquipment':
                setAddEquipment(true);
                break;
            case 'addTrainers':
                setAddTrainers(true);
                break;
            default:

                break;
        }
    }

    return (
        <div style={styles.container}>
            <form>
                <select style={styles.optionInput} value={value} onChange={handleChange}>
                    <option value="default">Wybierz opcje...</option>
                    <option value="addWorkouts">Dodaj treningi</option>
                    <option value="addDiets">Dodaj diety</option>
                    <option value="addEquipment">Dodaj sprzet</option>
                    <option value="addTrainers">Dodaj trenerów</option>
                    <option value="changeUserPrivileges">Zmien uprawnienia uzytkownika</option>
                </select>
            </form>
                {addWorkouts &&
                    <AddWorkouts></AddWorkouts>}
                {addDiets &&
                    <AddDiets></AddDiets>}
                {addEquipment &&
                    <div>{'addEquipment'}</div>}
                {addTrainers &&
                    <div>{'addTrainers'}</div>}
            {props.getAllPanelError &&
                <Error>{props.getAllPanelError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        getAllPanelError: state.auth.getAllPanelError,
        getAllPanelActionEnded: state.auth.getAllPanelActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            // getAllPanel,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);