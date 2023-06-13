import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="center">
            <div className="square"></div>
            <label for="Title" className="title">Login</label>
            <input type="text" name="email" placeholder="Email" className="box"/>
            <input type="text" name="password" placeholder="Password" className="box"/>
            <div>
                <input type="checkbox" name="terms"/>
                <label for="terms_check">I agree to the Terms and Conditions</label>
            </div>
            <button className="button" type = "submit">Submit</button>
            <div className="loginLinks">
                <a href="#">Forgot Password?</a>
                <a href="#">Support</a>
            </div>
      </form>
    </div>
  );
}

export default App;
