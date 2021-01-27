import { useRef } from 'react'
import { useClickOutside } from '../../hooks/hooks' 
import { ProductDetailsWrapper } from './ProductDetails.styles'
import { Item } from '../../store/cart/types'

const ProductDetails = ({ item }: { item: Item }) => {
    const prodDetailsRef = useRef<HTMLDivElement | null>(null)

    useClickOutside(prodDetailsRef)

    return (
        <ProductDetailsWrapper ref={prodDetailsRef}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <h2>Price: ${item.price}</h2>
        </ProductDetailsWrapper>
    )
}

export default ProductDetails
