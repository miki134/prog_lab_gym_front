// import React, { useState } from 'react';

export default function About() {
    // const [test, setTest] = useState('');
    // const handleInputChange = (e, setter) => {
    //     setter(e.target.value);
    // };

    // const handleLoginClick = () => {
    //     // api.login(email, password);
    //     console.log("test");
    // };

    return (
        <div>
            <input
                type="text"
                id={'test'}
                name={'test'}
                placeholder="Wprowadz mail"
                // onChange={(e) => handleInputChange(e, setTest)}
            />

            {/* <input type="button" onClick={handleLoginClick}></input> */}
        </div>
    );
}