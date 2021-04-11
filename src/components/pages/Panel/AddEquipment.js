import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEquipment } from '../../../auth/actions.js';
import React, { useState } from 'react';
import styles from './styles.js';
import Error from '../../Error/index.js';
import Input from '../../Input';
import Correct from '../../Correct'

const AddEquipment = (props) => {
    const [error, setError] = useState(false);
    const [sended, setSended] = useState(false);

    const [name, setName] = useState('');
    const [length, setlength] = useState('');
    const [height, setheight] = useState('');
    const [width, setwidth] = useState('');
    const [weight, setweight] = useState('');
    const [description, setdescription] = useState('');

    const handleInputChange = (e, set) => {
        set(e.target.value);
    };

    const handleAddEquipmentClick = () => {
        setSended(false);

        if ((!name) ||
            (!length) ||
            (!height) ||
            (!width) ||
            (!weight)) {
            setError(true);
        }
        else {
            setSended(true);
            setError(false);

            props.addEquipment(props.token, name, length, height, width, weight, description);
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
                        placeholder="Nazwa sprzetu..."
                        value={name}
                        onChange={e => handleInputChange(e, setName)}
                    />
                    <Input
                        type="text"
                        id="length"
                        name="Length"
                        placeholder="Dlugosc sprzetu..."
                        value={length}
                        onChange={e => handleInputChange(e, setlength)}
                    />
                    <Input
                        type="text"
                        id="height"
                        name="Height"
                        placeholder="Wysokosc sprzetu..."
                        value={height}
                        onChange={e => handleInputChange(e, setheight)}
                    />
                    <Input
                        type="text"
                        id="width"
                        name="Width"
                        placeholder="Szerokosc sprzetu..."
                        value={width}
                        onChange={e => handleInputChange(e, setwidth)}
                    />
                    <Input
                        type="text"
                        id="weight"
                        name="Weight"
                        placeholder="Waga sprzetu..."
                        value={weight}
                        onChange={e => handleInputChange(e, setweight)}
                    />
                    <Input
                        type="text"
                        id="description"
                        name="Description"
                        placeholder="Opis sprzetu..."
                        value={description}
                        onChange={e => handleInputChange(e, setdescription)}
                    />
                    <Input type="button"
                        onClick={handleAddEquipmentClick}
                        value="Dodaj sprzet" />
                    {props.addEquipmentError && sended && !props.addEquipmentActionEnded &&
                        <Error>{props.addEquipmentError}</Error>}
                    {error &&
                        <Error>Wypelnij wszystkie pola poprawnie!</Error>}
                    {props.addEquipmentActionEnded && sended &&
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
        addEquipmentError: state.auth.addEquipmentError,
        addEquipmentActionEnded: state.auth.addEquipmentActionEnded,

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addEquipment,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEquipment);