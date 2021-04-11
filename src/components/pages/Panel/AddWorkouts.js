import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addWorkout } from '../../../auth/actions.js';
import React, { useState, useEffect } from 'react';
import styles from '../../Table/styles.js';
import Error from '../../Error/index.js';
import Input from '../../Input';
import Correct from '../../Correct'

const AddWorkouts = (props) => {
    const [isMounted, setMounted] = useState(false);
    // const [downloaded, setdownloaded] = useState(false);
    const [error, setError] = useState(false);
    const [sended, setSended] = useState(false);

    const [name, setName] = useState('');
    const [lengthOfTime, setlengthOfTime] = useState('');
    const [quantityOfExercises, setquantityOfExercises] = useState('');
    const [difficulty, setdifficulty] = useState('');
    const [description, setdescription] = useState('');

    // useEffect(() => { setdownloaded(props.getAllEquipmentActionEnded); }, [props.getAllEquipmentActionEnded]);


    const handleInputChange = (e, set) => {
        set(e.target.value);
    };

    const handleAddWorkoutClick = () => {
        setSended(false);

        if ((!name) ||
            (!lengthOfTime) ||
            (!quantityOfExercises) ||
            (!difficulty)) {
            setError(true);
        }
        else {
            if(difficulty < 0 || difficulty > 9 || quantityOfExercises < 0){
                setError(true);
            }
            else {
                setSended(true);
                setError(false);
    
                props.addWorkout(props.token, name, lengthOfTime, quantityOfExercises, difficulty, description);
            }
        }
    };

    return (
        <div style={styles.container}>
            {props.token &&
                <form style={styles.update}>
                    <Input
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Nazwa ćwiczenia..."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                    />
                    <Input
                        type="text"
                        id="lengthOfTime"
                        name="Duration"
                        placeholder="Dlugosc cwiczenia..."
                        value={lengthOfTime}
                        onChange={e => handleInputChange(e, setlengthOfTime)}
                    />

                    <Input
                        type="number"
                        id="quantity Of Exercises"
                        name="Quantity Of Exercises"
                        placeholder="Ilosc cwiczen..."
                        value={quantityOfExercises}
                        min={0}
                        onChange={e => handleInputChange(e, setquantityOfExercises)}
                    />

                    <Input
                        type="number"
                        id="difficulty"
                        name="Difficulty"
                        placeholder="Poziom zaawansowania cwiczenia..."
                        value={difficulty}
                        max={9}
                        onChange={e => handleInputChange(e, setdifficulty)}
                    />
                    <Input
                        type="text"
                        id="description"
                        name="Description"
                        placeholder="Opis cwiczenia..."
                        value={description}
                        onChange={e => handleInputChange(e, setdescription)}
                    />
                    <Input type="button"
                        onClick={handleAddWorkoutClick}
                        value="Dodaj trening" />
                    {props.addWorkoutError && sended && !props.addWorkoutActionEnded &&
                    <Error>{props.addWorkoutError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola poprawnie!</Error>}
                    {props.addWorkoutActionEnded && sended &&
                    <Correct>Poprawnie zaktualizowano dane!</Correct>}
                </form>}

            {!props.token && <Error>Sesja wygasla! Zaloguj sie!</Error>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.auth.data,
        token: state.auth.token,
        addWorkoutError: state.auth.addWorkoutError,
        addWorkoutActionEnded: state.auth.addWorkoutActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addWorkout,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkouts);