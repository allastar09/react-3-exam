
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'


const Course = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const api = 'https://test-swagger-2ph6.onrender.com/auth/login'

  async function get(e) {
    e.preventDefault()

    try {
      const res = await axios.post(api, {
        email,
        password
      })

      localStorage.setItem('token', res.data.token)

      navigate('/about')

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={get}>
        <input
          type="email"
          className="border"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Course
