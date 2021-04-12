import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { getAllPanel } from '../../../auth/actions.js';s
import React, { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import AddWorkouts from './AddWorkouts.js';
import AddDiets from './AddDiets.js';
import AddEquipment from './AddEquipment.js';
import AddTrainers from './AddTrainers.js';
import SelectUser from './SelectUser.js';

const Panel = (props) => {
    const [isMounted, setMounted] = useState(false);
    // const [downloaded, setdownloaded] = useState(false);
    // const [firstClick, setFirstClick] = useState(false);

    const [addWorkouts, setAddWorkouts] = useState(false);
    const [addDiets, setAddDiets] = useState(false);
    const [addEquipment, setAddEquipment] = useState(false);
    const [addTrainers, setAddTrainers] = useState(false);
    const [updateUsers, setUpdateUsers] = useState(false);


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
        setUpdateUsers(false);

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
            case 'updateUsers':
                setUpdateUsers(true);
                break;
            default:

                break;
        }
    }

    return (
        <div style={styles.container}>
            {props.role === 'admin' &&
                <form>
                    <select style={styles.optionInput} value={value} onChange={handleChange}>
                        <option value="default">Wybierz opcje...</option>
                        <option value="addWorkouts">Dodaj treningi</option>
                        <option value="addDiets">Dodaj diety</option>
                        <option value="addEquipment">Dodaj sprzet</option>
                        <option value="addTrainers">Dodaj trenerów</option>
                        <option value="updateUsers">Zamien dane użytkowników</option>
                    </select>
                </form>}
            {addWorkouts &&
                <AddWorkouts></AddWorkouts>}
            {addDiets &&
                <AddDiets></AddDiets>}
            {addEquipment &&
                <AddEquipment></AddEquipment>}
            {addTrainers &&
                <AddTrainers></AddTrainers>}
            {updateUsers &&
                <SelectUser></SelectUser>}
            {props.role !== 'admin' &&
                <Error>Brak wystarczajacyh uprawnien! Zaloguj sie ponownie!</Error>}
            {props.getAllPanelError &&
                <Error>{props.getAllPanelError}</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        role: state.auth.role,

        getAllPanelError: state.auth.getAllPanelError,
        getAllPanelActionEnded: state.auth.getAllPanelActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);