import React from 'react'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText.componet'

const ItemStyles = styled.div`

  background-color: wheat;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: black;
    background-color: gray;
    padding: 1rem;
    height: 50px;
    width:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className='icon'>{icon}</div>
      <div className='info'>
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  )
}
