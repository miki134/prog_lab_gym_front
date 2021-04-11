import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDiet } from '../../../auth/actions.js';
import React, { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import Input from '../../Input';
import Correct from '../../Correct'

const AddDiets = (props) => {
    // const [isMounted, setMounted] = useState(false);
    // const [downloaded, setdownloaded] = useState(false);
    const [error, setError] = useState(false);
    const [sended, setSended] = useState(false);

    const [name, setName] = useState('');
    const [quantityOfProducts, setquantityOfProducts] = useState('');
    const [numberOfMealsPerDay, setnumberOfMealsPerDay] = useState('');
    const [meat, setmeat] = useState(false);
    const [description, setdescription] = useState('');

    // useEffect(() => { setdownloaded(props.getAllEquipmentActionEnded); }, [props.getAllEquipmentActionEnded]);


    const handleInputChange = (e, set) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        set(value);
    };

    const handleAddDietClick = () => {
        setSended(false);

        if ((!name) ||
            (!quantityOfProducts) ||
            (!numberOfMealsPerDay) ||
            (!meat)) {
            setError(true);
        }
        else {
            if (quantityOfProducts < 0 || numberOfMealsPerDay < 0) {
                setError(true);
            }
            else {
                setSended(true);
                setError(false);

                props.addDiet(props.token, name, quantityOfProducts, numberOfMealsPerDay, meat, description);
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
                        placeholder="Nazwa diety..."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                    />
                    <Input
                        type="number"
                        id="quantityOfProducts"
                        name="Quantity Of Products"
                        placeholder="Ilosc skladnikow..."
                        value={quantityOfProducts}
                        min={0}
                        onChange={e => handleInputChange(e, setquantityOfProducts)}
                    />

                    <Input
                        type="number"
                        id="numberOfMealsPerDay"
                        name="Number Of Meals Per Day"
                        placeholder="Ilosc posilkow dziennie..."
                        value={numberOfMealsPerDay}
                        min={0}
                        onChange={e => handleInputChange(e, setnumberOfMealsPerDay)}
                    />
                    <label>Meat
                    <input
                            type="checkbox"
                            id="meat"
                            name="Meat"
                            checked={meat}
                            onChange={e => handleInputChange(e, setmeat)}>
                        </input>
                    </label>
                    <Input
                        type="text"
                        id="description"
                        name="Description"
                        placeholder="Opis diety..."
                        value={description}
                        onChange={e => handleInputChange(e, setdescription)}
                    />
                    <Input type="button"
                        onClick={handleAddDietClick}
                        value="Dodaj diete" />
                    {props.addDietError && sended && !props.addDietActionEnded &&
                        <Error>{props.addDietError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola poprawnie!</Error>}
                    {props.addDietActionEnded && sended &&
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
        addDietError: state.auth.addDietError,
        addDietActionEnded: state.auth.addDietActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addDiet,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDiets);