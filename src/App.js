import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Content from './Content'
import Login from './Login'
import Post from './Post'
import CreatePost from './CreatePost'
import UpdatePost from './UpdatePost'

function App(props) {
  const isLogin = props.loginData.isLogin

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          {!isLogin ? <Login /> : <Redirect to="/cart"></Redirect>}
        </Route>
        <Route exact path="/">
          {isLogin ? <Content /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/cart">
          {isLogin ? <Cart /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/post">
          {isLogin ? <Post /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/create">
          {isLogin ? <CreatePost /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/update">
          {isLogin ? <UpdatePost /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

//ngambil state global dari store diubah ke props
const mapStateToProps = state => {
  return {
    loginData: state.login,
    cartData: state.cart
  }
}

export default compose(
  connect(mapStateToProps),
)(App)