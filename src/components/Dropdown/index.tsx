import { useState } from 'react'

import {
  ProfileBox,
  ProfileHi,
  ProfileName,
  ProfileImage,
  Dropdownwrapper
} from './styles'

type DropdownProps = {
  options: string[]
  defaultText: {
    name: string
    urlProfile: string
  }
}

const Dropdown = ({ options, defaultText }: DropdownProps) => {
  const [state, setState] = useState(false)

  const changeState = (optionName: boolean) => {
    setState(optionName)
  }

  return (
    <>
      <ProfileBox onClick={() => changeState(!state)}>
        <ProfileHi>Olá</ProfileHi>
        <ProfileName>{defaultText.name}</ProfileName>
        <ProfileImage src={defaultText.urlProfile} alt="profile" />
      </ProfileBox>

      <Dropdownwrapper $state={state}>
        <ul>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </Dropdownwrapper>
    </>
  )
}

export default Dropdown
