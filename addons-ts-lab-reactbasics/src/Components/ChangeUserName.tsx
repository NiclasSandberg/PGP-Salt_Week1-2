import React, { ChangeEvent } from 'react'
import { UserData } from '../interfaces';

interface IChangeUserNameCompProps {
  user: UserData,
  onNameChanged(event: ChangeEvent<HTMLInputElement>): void
}

const ChangeUserName = ({user: { name }, onNameChanged}: IChangeUserNameCompProps) => {
  return (
    <>
      <input type="text" value={name} onChange={onNameChanged} />
    </>
  )
}

export default ChangeUserName