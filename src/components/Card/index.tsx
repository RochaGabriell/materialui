import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

type CardProps = {
  alt: string
  src: string
  text: string
  price: string
}

const CardView = ({ alt, src, text, price }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={alt} height="140" image={src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {alt} - R$: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Alugar</Button>
        <Button size="small">ver Mais</Button>
      </CardActions>
    </Card>
  )
}

export default CardView
