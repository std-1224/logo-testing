import React, { useState } from "react"
import axios from "axios"

const Login = () => {
  const [error, setError] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const handleClick = async (e ) => {
    e.preventDefault()

    setLoading(true)
    try {
      // ? fetch data
      const { data } = await axios.get("https://jsonplaceholder.org/users/1")
      setUser(data)
      setError(false)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  return (
    <div>
      {
        user ? (
          <span>{user?.firstname}</span>
        ) : (<></>)
      }
      <form>
        <input
          type="text"
          aria-label="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!username || !password} onClick={handleClick}>
          {loading ? "loading..." : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  )
}

export default Login
