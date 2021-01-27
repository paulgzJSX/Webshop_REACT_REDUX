import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../store/cart/actions'
import { displayBackdrop } from '../../store/backdrop/actions'
import { fetchProducts } from './../../api/api'
import { ProductDetails } from '../../components'
import { AddToCart, MainContent, ItemCard } from './Items.styles'
import { RootState } from '../../index'
import { Item } from '../../store/cart/types'

const Items = () => {
    const dispatch = useDispatch()
    const itemIds = useSelector((state: RootState) => state.cart.items.map(item => item.id))
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)

    const { data } = useQuery<Item[]>(
        ['products', selectedCategory],
        () => fetchProducts(selectedCategory),
        { staleTime: Infinity }
    )

    const handleClick = (item: Item) => {
        !itemIds.includes(item.id) ? dispatch(addItem(item)) : dispatch(removeItem(item.id))
    }

    return (
        <MainContent>
            {data?.map(item =>
                <ItemCard key={item.id}>
                    <img src={item.image} alt={item.title} onClick={() => dispatch(displayBackdrop(<ProductDetails item={item} />))} />
                    <h3>${item.price}</h3>
                    <p>{item.title}</p>
                    <AddToCart
                        $type={itemIds.includes(item.id) ? true : false}
                        onClick={() => handleClick(item)}
                    >
                        {!itemIds.includes(item.id)
                            ? <p>Add to Cart</p>
                            : <p>Remove from Cart</p>}
                    </AddToCart>
                </ItemCard>)}
        </MainContent>
    )
}

export default Items
