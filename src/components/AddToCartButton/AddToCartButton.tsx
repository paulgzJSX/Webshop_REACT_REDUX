import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/cart/actions'
import { AddToCartBtn } from './AddToCartButton.styles'
import { RootState } from '../../index'
import { Item } from "../../store/cart/types"

const AddToCartButton = ({ item, type }: { item: Item, type: 'button' | 'popover' }) => {
    const dispatch = useDispatch()
    const itemIds = useSelector((state: RootState) => state.cart.items.map(item => item.id))
    const isInCart = itemIds.includes(item.id)

    const handleClick = (item: Item) => {
        !isInCart ? dispatch(addItem(item)) : dispatch(removeItem(item.id))
    }

    return (
        <AddToCartBtn $isInCart={isInCart} type={type} onClick={() => handleClick(item)}>
            {!isInCart 
                ? <span>Add to Cart</span> 
                : <span>Remove from Cart</span>}
        </AddToCartBtn>
    )
}

export default AddToCartButton