import { Card } from "react-bootstrap"
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurreny'

type StoreItemProps = {
    id:number
    name:string
    price:number
    imgUrl:string
}


export function StoreItems({ id, name, price, imgUrl}:StoreItemProps) {

    
return (

    <Card>
        <Card.Img variant='top' src={imgUrl} height='200px' style={
         {objectFit:'cover'}}
         />
         <Card.Body className='d-flex flex-column'>
         <Card.Title className ="d-flex flex-column
         justify-content-space-between align-items-baseline
         mb-4">
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{formatCurrency (price)}</span>
         </Card.Title>
        </Card.Body>
    </Card>
)
}