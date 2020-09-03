import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../_action/user_action'
import { withRouter } from 'react-router-dom'


function RegisterPage(props) {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value)
  }
  
  const onNameHandler = e => {
    setName(e.currentTarget.value)
  }

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }

  const onConfirmPasswordHandler = e => {
    setConfirmPassword(e.currentTarget.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault()

    if(password !== confirmPassword) {
      return alert('password doesnt match')
    }

    let body = {
      email, password, name
    }

    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success) {
          props.history.push('/login')
        } else {
          alert('Failed to sign up')
        }
      })
  }


  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>

        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />

        <br />
        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default withRouter(RegisterPage)
