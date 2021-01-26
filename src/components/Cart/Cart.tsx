import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../actionCreators/ActionCreators'
import { Tooltip } from '@material-ui/core'
import { CartWrapper, Description, PriceQuntity, Product, ProductWrapper, TotalWrapper } from './Cart.styles'
import { Item } from '../Items/Items'

const Cart = React.forwardRef(({ ...props }, ref: any) => {
    const dispatch = useDispatch()
    const items = useSelector((state: any) => state.items)

    return (
        <CartWrapper ref={ref}>
            <h2>Your cart items</h2>
            <ProductWrapper>
                {items.map((item: Item) =>
                    <Product key={item.id}>
                        <Description>
                            <img src={item.image} alt="" />
                            <p>{item.title}</p>
                        </Description>
                        <PriceQuntity>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <span className='quantity'>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                            <Tooltip title='Remove from cart'>
                                <span className='remove' onClick={() => dispatch(removeItem(item.id))}>X</span>
                            </Tooltip>
                        </PriceQuntity>
                    </Product>)}
            </ProductWrapper>
            <TotalWrapper>
                <h3>Total:</h3>
                <h3>$800.00</h3>
            </TotalWrapper>
        </CartWrapper>
    )
})

export default Cart
