import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { displayBackdrop } from '../../store/backdrop/actions'
import { fetchProducts } from './../../api/api'
import { ProductDetails, AddToCartButton } from '../../components'
import { MainContent, ItemCard } from './Items.styles'
import { RootState } from '../../index'
import { Item } from '../../store/cart/types'

const Items = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)

    const { data } = useQuery<Item[]>(
        ['products', selectedCategory],
        () => fetchProducts(selectedCategory),
        { staleTime: Infinity }
    )

    return (
        <MainContent>
            {data?.map(item =>
                <ItemCard key={item.id}>
                    <img src={item.image} alt={item.title} onClick={() => dispatch(displayBackdrop(<ProductDetails item={item} />))} />
                    <h3>${item.price}</h3>
                    <p>{item.title}</p>
                    <AddToCartButton item={item} type='popover' />
                </ItemCard>)}
        </MainContent>
    )
}

export default Items
