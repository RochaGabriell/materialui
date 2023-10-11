import hamburger from '../../assets/hamburger.svg'
import Dropdown from '../Dropdown'
import { HeaderWrapper, BamburgerBox, Button } from './styles'


type HeaderProps = {
  handleVisMenu: () => void
}

type defaultText = {
  name: string
  urlProfile: string
}

const Header = (props: HeaderProps) => {

  const options: string[] = ['Editar Pefil', 'Confingurações', 'Sair']
  const defaultText: defaultText = {
    name: 'Estudante',
    urlProfile: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
  }

  return (
    <>
      <HeaderWrapper>
        <BamburgerBox>
          <Button onClick={props.handleVisMenu}>
            <img src={hamburger} alt="hamburger" />
          </Button>
        </BamburgerBox>
        <Dropdown
          options={options}
          defaultText={defaultText}
        />
      </HeaderWrapper>
    </>
  )
}

export default Header