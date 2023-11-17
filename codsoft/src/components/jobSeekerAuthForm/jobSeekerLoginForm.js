import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import './style.css'

export const JobSeekerLoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async e => {
    e.preventDefault()

    try {
      const loginData = {
        email,
        password,
      }

      // Make the API request to handle login
      const response = await fetch('http://localhost:3001/candidate/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        //check for pending application
        const pendingApplication = localStorage.getItem('pendingApplication')
        if (pendingApplication) {
          // Clear the flag
          localStorage.removeItem('pendingApplication')

          // Redirect the user to the job application page
          navigate('/jobApplication')
        } else {
          // Redirect the user to the dashboard or the desired page
          navigate('/employer/dashboard')
        }
        console.log('Login successful')
        setEmail('')
        setPassword('')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  return (
    <div className="auth-container">
      <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title"></li>
            <li className="header-login">
              <button onClick={() => onFormSwitch('register')}>register</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="input-container">
        <form className="employer-form">
          <h2>Log In</h2>

          <input type="email" value={email} name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={e => handleLogin(e)}>
            Sign In
          </button>
          <button onClick={() => onFormSwitch('register')} className="switch-button">
            Not registered? create an Account
          </button>
        </form>
      </div>
    </div>
  )
}
