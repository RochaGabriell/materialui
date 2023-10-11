import CardView from '../../components/Card'
import styled from 'styled-components'

type CardProps = {
  alt: string
  src: string
  text: string
  price: string
}[]

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`


export default function ImgMediaCard() {
  const listCards: CardProps = [
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    },
    {
      alt: 'Kitnet',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iaAHfxNBI_35PdH9R6jAKec5-kppYjfwag&usqp=CAU',
      text: 'O quarto é muito bom, tem uma cama, um guarda roupa e uma mesa de estudos e um banheiro com chuveiro e pia  e um vaso sanitário.',
      price: '500,00'
    }
  ]

  return (
    <Container>
      {listCards.map((card, index) => (
        <CardView
          key={index}
          alt={card.alt}
          src={card.src}
          text={card.text}
          price={card.price}
        />
      ))}
    </Container>
  )
}
