import { Card } from "react-bootstrap"
import sotreItems from '../data/items.json'

type StoreItemProps = {
    id:number
    name:string
    price:number
    imgUrl:string
}


export function StoreItem({ id, name, price, imgUrl}:StoreItemProps) {
return (

    <Card>
        <Card.Img variant='top' src={imgUrl} height='200px' style={
         {objectFit:'cover'}}
         />
         <Card.Title className ="d-flex flex-column
         justify-content-space-between align-items-baseline
         mb-4">
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{price}</span>

         </Card.Title>
    </Card>
)
}