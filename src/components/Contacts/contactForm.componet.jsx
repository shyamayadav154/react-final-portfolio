import React, { useState } from 'react'
import styled from 'styled-components'

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
  }
  label {
    font-size: 1.25rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.25rem;
    padding: 0.8rem;
    color: #36383A;
    background-color: #eeeeee;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button[type='submit'] {
        color: white;
      background-color: black;
      width: 10rem;
      height: 3rem;
      font-weight: 400;
      border-radius: 22px;
        cursor: pointer;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      transition: 0.2s ease-in-out;
      text-transform: uppercase;
      margin: 1rem;
      font-weight: 600;
  }
`

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <FormStyle>
        <div className='form-group'>
          <label htmlFor='name'>
            Your Name
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Your Email
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='message'>
            Your message
            <textarea
              type='text'
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>SEND</button>
      </FormStyle>
    </>
  )
}
