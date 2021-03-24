import './App.css';
import { Component } from 'react';
import axios from 'axios';

const READ_ONE_USER_PATH = 'http://localhost/repos/gym/api/users/read_one.php';
const CREATE_USER_PATH = 'http://localhost/repos/gym/api/users/create.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      // message: '',
      mailSent: '',
      user_id: '',
      userAdded: '',
    }
  }

  handleFormSubmit = (e, path, _method = 'post') => {
    e.preventDefault();
    axios({
      method: `${_method}`,
      url: `${path}`,
      headers: { 'content-type': 'application/json' },
      data: this.state,
    })
      .then(result => {
        this.changeState(result.data, path);
      })
      .catch(error => this.setState({ error: error.message }));
  };

  changeState = (res, p) => {
    console.log(res);
    switch(p){
      case CREATE_USER_PATH:
        this.setState({
          userAdded: res.message
        })
        break;
      case READ_ONE_USER_PATH:
        this.setState({
          id: res.id,
          user_name: res.name,
          user_surname: res.surnname,
        })
        break;
      default:
        break;
    }
  }
  
  getUsers(t) {
    let count = "";
    console.log(t);
    for (let i = 0; i < t.length; i++) {
      // console.log(t);
      count += t[i].id + " " + t[i].name + " " + t[i].surname;
    }
    return count;
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>First Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.."
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label>Last Name</label>
          <input type="text" id="surname" name="surname" placeholder="Your last name.."
            value={this.state.surname}
            onChange={e => this.setState({ surname: e.target.value })}
          />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Wprowadz mail"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />


          {/* <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea> */}
          <button type="submit" onClick={e => this.handleFormSubmit(e, CREATE_USER_PATH)} >Zarejestruj</button>
        </form >
        <div>
          {this.state.userAdded && 
          <div><b>{this.state.userAdded}</b></div>}
        </div>


        <form>
          <label>Pobierz użytkownika</label>
          <input type="number" id="user_id" name="user_id" placeholder="put user id" min="0" step="1"
            value={this.state.user_id}
            onChange={e => this.setState({ user_id: e.target.value })} />
          <button type="submit" onClick={e => this.handleFormSubmit(e, READ_ONE_USER_PATH)} >Pobierz</button>
          <div>
            {this.state.id &&
              <div><b>{this.state.id} {this.state.user_name} {this.state.user_surname}</b></div>
            }
          </div>
        </form>
      </div >
    );
  }
}

export default App;
