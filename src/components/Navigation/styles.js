const navBox = {
    backgroundColor: 'rgb(164,164,164)',
    textDecoration: 'none',
    width: '45vw',
    fontSize: '1.2rem',
    whiteSpace: 'nowrap',
    padding: '1rem',
    textAlign: 'center',
};

const hover = {
    backgroundColor: 'rgb(130, 130, 130)',
}

const a = {
    textDecoration: 'none',
    color: 'black',
};

const navMenu = {
    display: 'flex',
    margin: '0px',
    padding: '0px',
    width: '100%',
    // animationDuration: '0.5s',
    // animationTimingFunction: 'linear',
    // animationFillMode: 'forwards',
    // overflow: 'hidden',
    textDecoration: 'none',
    float: 'right',
    listStyleType: 'none',

    alignItems: 'center',
    justifyContent: 'center',
    height: '57px',

    position: 'absolute',

};

const main = {
    justifyContent: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: '57px',
}

const navigation = {
    backgroundColor: '#0122', 
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%', 
    overflow: 'auto',
}

const darkMode = {
    backgroundColor: '#2B2B2B',
    color: 'white',
}

const dropdown = {
    margin: '0px',
    padding: '0px',
    textDecoration: 'none',
    listStyleType: 'none',
    float: 'left',
    position: 'absolute',
    lineHeight:'2em',
    flexDirection: 'column',
    zIndex: '1111',
    top: '57px',
    left: '20%',
}

const dropdownItem = {
    float: 'left',
    margin: '0px',
    top: '50px',
    width: '20vw',
    height: '57px',
    backgroundColor: 'rgb(164,164,164)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const show = {
    display: 'flex',
}

const hide = {
    display: 'none',
}

const styles = {
    navBox,
    a,
    navMenu,
    hover,
    main,
    navigation,
    dropdown,
    hide,
    show,
    dropdownItem,
    darkMode,
};


export default styles;



/*
ul{
    list-style-type:none;
    background-culor:#FFF;
    font-size:18px;
    line-height:1em;
    text-align:center;
}
ul a {
    display:block;
    text-decoration:none;
    culor: white;
    padding: 1px;
}

ul > li {
    float:left;
    background-culor: blue;
    width:150px;
}

ul > li:hover > ol {
    display:block;
}

ul > li > ol {
    display:none;
    list-style-type:none;
    padding:0;
}

ul > li > ol > li {
    background-culor: white;
    border: 1px sulid blue;
    text-align: left;
    width: 300px;
}

ul > li > ol > li > a{
    culor: gray;
}

ul > li > ol > li:hover{
    background-culor: blue;
}
ul > li > ul > li:hover > a {
    culor: white;
}

*/