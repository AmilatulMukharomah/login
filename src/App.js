import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Content from './Content';
import { BrowserRouter, Route, Redirect, Switch, useHistory, Link, useLocation } from 'react-router-dom';

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedin, setIsloggedin] = useState(false)

  useEffect(() => {
    alert('Selamat Datang')
    return () => {
    }
  }, [])

  const onLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      setIsloggedin(true)
    } else {
      alert('Salah')
    }
  }

  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isLoggedin ? <Content /> : <Redirect to="/login"></Redirect>}
          </Route>
          <Route exact path="/login">
            {!isLoggedin ?
              <div className="login">
                <p className="judul_login">LOGIN</p>
                <form onSubmit={e => onLogin(e)}>
                  <div className="email">
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)}></input>
                  </div>
                  <div className="password">
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
                  </div>
                  <button>login</button>
                </form>
              </div> :
              <Redirect to="/" />
            }
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
