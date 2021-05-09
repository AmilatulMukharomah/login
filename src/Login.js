import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUser } from './Redux/action/user'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async (e) => {
        e.preventDefault()
        try {
            const data = {
                userData: [{
                    username: username,
                    password: password
                }],
                isLogin: true,
            }
            await props.dispatch(getUser(data))
        } catch (error) {
            console.log(error)
        }
        // onLogin()
    }

    return (
        <div>
            <form onSubmit={(e) => signIn(e)} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}

export default compose(
    connect(mapStateToProps),
)(Login)