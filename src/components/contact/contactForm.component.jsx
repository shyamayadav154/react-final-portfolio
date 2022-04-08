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
    color: #b2b5b8;
    background-color: #3d0b0b;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: gray;
    color: black;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
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
        <button type='submit'>Send</button>
      </FormStyle>
    </>
  )
}
