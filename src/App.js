import './App.css';
import { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/repos/gym/test.php';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: '',
    }
  }

  handleFormSubmit = e => {
    
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        const abc = result.data;
        console.log(abc);
        console.log(abc);
        this.setState({
          mailSent: result.data
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="App">
        <form>
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
          />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />


          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <button type="submit" onClick={e => this.handleFormSubmit(e)} >Submit</button>
        </form >
        <div>
          {this.state.mailSent &&
            <div><b>{`${this.state.mailSent.message} `}{this.state.mailSent.fname}</b></div>
          }
        </div>
      </div >
    );
  }
}

export default App;
