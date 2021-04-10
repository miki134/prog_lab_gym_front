import React from 'react';
import './styles.css';
import Slider from 'infinite-react-carousel';
import styles from './styles.js'
import { Link } from 'react-router-dom';


import slider_1 from '../../../dependencies/images/slider_1.jpg';
import slider_2 from '../../../dependencies/images/slider_2.jpg';
import slider_3 from '../../../dependencies/images/slider_3.jpg';
import slider_4 from '../../../dependencies/images/slider_4.jpg';
import slider_5 from '../../../dependencies/images/slider_5.jpg';
import slider_6 from '../../../dependencies/images/slider_6.jpg';

const MainSlider = () => {
    return (
        <div style={styles.slider}>
            <Slider className='main' slidesToShow={3} dots dotsClass='carousel-dots' centerMode={false} autoplay={true} autoplaySpeed={3000} rows={1}>
                <img src={slider_1} alt="slider_1" />
                <img src={slider_2} alt="slider_2" />
                <img src={slider_3} alt="slider_3" />
                <img src={slider_4} alt="slider_4" />
                <img src={slider_5} alt="slider_5" />
                <img src={slider_6} alt="slider_6" />
            </Slider>
        </div>
    );
}

const SubSlider = () => {
    return (
        <div style={styles.subslider}>
            <Slider slidesToShow={3} dots dotsClass='carousel-dots' centerMode={false} autoplay={true} autoplaySpeed={3000} rows={1}>
                <Link className='prod' to='/workouts'><p>TRENINGI</p></Link>
                <Link className='prod' to='/diets'><p>DIETY</p></Link>
                <Link className='prod' to='/gym'><p>SPRZĘT</p></Link>
                <Link className='prod' to='/trainers'><p>TRENERZY</p></Link>
            </Slider>
        </div>
    );
}


export default function Home() {
    return (
        <div style={styles.mainPage}>
            <MainSlider />
            <SubSlider />
        </div>
    );
}