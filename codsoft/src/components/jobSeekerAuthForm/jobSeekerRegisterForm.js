import React from 'react'
import { useState } from 'react'
import { RegisterCandidate } from '../services/registerCandidate'
import './style.css'
export const JobSeekerRegisterForm = ({ onFormSwitch }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [usernameError, setUsernameError] = useState('')
  console.log('usernameerror:', usernameError)
  console.log('username', username)

  return (
    <div className="auth-container">
      <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title"></li>
            <li className="header-login">
              <button onClick={() => onFormSwitch('login')}>Login</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="input-container">
        <form className="employer-form">
          <h2>Sign UP</h2>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={e => setUsername(e.target.value)}
          />
          <div className="error">{usernameError}</div>

          <input type="email" value={email} name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <div className="error">{emailError}</div>

          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <div className="error">{passwordError}</div>

          <button
            className="register-button"
            onClick={e =>
              RegisterCandidate(
                e,
                email,
                password,
                username,
                setEmailError,
                setPasswordError,
                setUsernameError,
                onFormSwitch
              )
            }
          >
            Sign Up
          </button>
          <button onClick={() => onFormSwitch('login')} className="switch-button">
            Already have an account? login here
          </button>
        </form>
      </div>
    </div>
  )
}
