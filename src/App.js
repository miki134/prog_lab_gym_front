import './App.css';
import React from 'react';
// import api from './api/handle.js';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navigation from './components/Navigation/Navigation.js';

function App() {
  // const [token, setToken] = useState('');
  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [message, setMessage] = useState('waiting for response');


  // const request = () => {
  //   api
  //     .register(name, surname)
  //     .then((res) => {
  //       // setMessage(res);
  //     })
  //     .catch((err) => console.warn(err));
  // };

  // const onclick = (e) => {
  //   e.preventDefault();
  //   request();
  // };

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeSurname = (e) => {
  //   setSurname(e.target.value);
  // };

  // const request = (e) => {
  // e.preventDefault();

  // api.register()
  //   .then(result => {
  //     console.log(result.data);
  //   })
  //   .catch(error => this.setState({ error: error.message }));


  //   // if (res.status >= 200 && res.status <= 299) {
  //   //   const jwt = await res.text();
  //   //   store.setJWT(jwt);
  //   //   frmLogin.style.display = 'none';
  //   //   btnGetResource.style.display = 'block';
  //   // } else {
  //   //   // Handle errors
  //   //   console.log(res.status, res.statusText);
  //   // }

  //   // axios({
  //   //   method: `${_method}`,
  //   //   url: `${path}`,
  //   //   headers: { 'content-type': 'application/json' },
  //   //   data: this.state,
  //   // })
  //   //   
  // };

  // const changeState = (res, p) => {
  //   console.log(res);
  //   switch (p) {
  //     case URL.CREATE_USER_PATH:
  //       this.setState({
  //         userAdded: res.message
  //       })
  //       break;
  //     case URL.READ_ONE_USER_PATH:
  //       this.setState({
  //         id: res.id,
  //         user_name: res.name,
  //         user_surname: res.surnname,
  //       })
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: '',
  //       surname: '',
  //       email: '',
  //       mailSent: '',
  //       user_id: '',
  //       userAdded: '',
  //       JWT: 'test',
  //       password: '',
  //     }
  //   }

  // getUsers(t) {
  //   let count = "";
  //   console.log(t);
  //   for (let i = 0; i < t.length; i++) {
  //     // console.log(t);
  //     count += t[i].id + " " + t[i].name + " " + t[i].surname;
  //   }
  //   return count;
  // }
  return (
    <Router>
      <Navigation />
    </Router>
  );
  // <Router>
  //     <div className="App">
  //       <Navigation />
  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //         <Route path="/product">
  //           <Product />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>

  // <div className="App">
  //   {/* <form>
  //     <label>name</label>
  //     <input type="text" id="name" name="name" placeholder="Your name.."
  //       value={this.state.name}
  //       onChange={e => this.setState({ name: e.target.value })}
  //     />

  //     <label>Email</label>
  //     <input type="email" id="email" name="email" placeholder="Wprowadz mail"
  //       value={this.state.email}
  //       onChange={e => this.setState({ email: e.target.value })}
  //     />

  //     <label>password</label>
  //     <input type="email" id="password" name="password" placeholder="Wprowadz haslo"
  //       value={this.state.password}
  //       onChange={e => this.setState({ password: e.target.value })}
  //     />
  //     <button type="submit" onClick={e => this.handleFormSubmit(e, JWT_TESTS)} >Zaloguj</button>
  //   </form > */}

  //   <form>
  //     <label>First Name</label>
  //     <input type="text" id="name" name="name" placeholder="Your name.."
  //       value={this.state.name}
  //       onChange={e => this.setState({ name: e.target.value })}
  //     />
  //     <label>Last Name</label>
  //     <input type="text" id="surname" name="surname" placeholder="Your last name.."
  //       value={this.state.surname}
  //       onChange={e => this.setState({ surname: e.target.value })}
  //     />

  //     <label>Email</label>
  //     <input type="text" id="email" name="email" placeholder="Wprowadz mail"
  //       value={this.state.email}
  //       onChange={e => this.setState({ email: e.target.value })}
  //     />

  //     <label>password</label>
  //     <input type="password" id="password" name="password" placeholder="password"
  //       value={this.state.password}
  //       onChange={e => this.setState({ password: e.target.value })}
  //     />


  //     {/* <label>Message</label>
  //     <textarea id="message" name="message" placeholder="Write something.."
  //       onChange={e => this.setState({ message: e.target.value })}
  //       value={this.state.message}
  //     ></textarea> */}
  //     <button type="submit" onClick={e => this.handleFormSubmit(e, CREATE_USER_PATH)} >Zarejestruj</button>
  //   </form >
  //   <div>
  //     {this.state.userAdded &&
  //       <div><b>{this.state.userAdded}</b></div>}
  //   </div>


  //   <form>
  //     <label>Pobierz użytkownika</label>
  //     <input type="number" id="user_id" name="user_id" placeholder="put user id" min="0" step="1"
  //       value={this.state.user_id}
  //       onChange={e => this.setState({ user_id: e.target.value })} />
  //     <button type="submit" onClick={e => this.handleFormSubmit(e, READ_ONE_USER_PATH)} >Pobierz</button>
  //     <div>
  //       {this.state.JWT &&
  //         <div><b>{this.state.id} {this.state.JWT} {this.state.user_surname}</b></div>
  //       }
  //     </div>
  //   </form>
  // </div >


};

export default App;

// import React from 'react';
// import {ThemeContext, themes} from './theme-context';
// import ThemedButton from './themed-button';

// // An intermediate component that uses the ThemedButton
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // The ThemedButton button inside the ThemeProvider
//     // uses the theme from state while the one outside uses
//     // the default dark theme
//     return (
//       <div>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//           <ThemedButton />
//       </div>
//     );
//   }
// };
// export default App;