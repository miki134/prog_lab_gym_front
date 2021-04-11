import React from 'react';
import './styles.css';
import Slider from 'infinite-react-carousel';
import styles from './styles.js'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const SubSlider = (props) => {
    return (
        <div
        style={{
            ...styles.subslider,
        }}>
    <Slider slidesToShow={3} dots dotsClass='carousel-dots' centerMode={false} autoplay={true} autoplaySpeed={3000} rows={1}>
        <Link className='prod' to='/workouts'><p>TRENINGI</p></Link>
        <Link className='prod' to='/diets'><p>DIETY</p></Link>
        <Link className='prod' to='/gym'><p>SPRZĘT</p></Link>
        <Link className='prod' to='/trainers'><p>TRENERZY</p></Link>
    </Slider>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        data: state.auth.data,

        darkMode: state.auth.setDarkMode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSlider);