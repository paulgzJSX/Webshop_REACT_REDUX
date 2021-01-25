import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './../../api/api'
import { AddToCart, MainContent, ItemCard } from './Items.styles'
import { Category } from '../Sidebar/Sidebar'

export type Item = {
    id: number,
    title: string,
    price: number,
    category: Category,
    description: string,
    image: string
}

const getItemIds = (state: any) => state.items.map((item: Item) => item.id)
const getSelectedCategory = (state: any) => state.category

const Items = () => {
    const dispatch = useDispatch()
    const itemIds = useSelector(getItemIds)
    const selectedCategory = useSelector(getSelectedCategory)

    const { data } = useQuery(['products', selectedCategory], () => fetchProducts(selectedCategory), {
        staleTime: Infinity
    })

    const handleClick = (item: Item) => {
        !itemIds.includes(item.id)
           ? dispatch({ type: 'ADD_ITEM', item })
           : dispatch({ type: 'REMOVE_ITEM', id: item.id })
    }

    return (
        <MainContent>
            {data?.map((item: Item) =>
                <ItemCard key={item.id}>
                    <img src={item.image} alt={item.title} />
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
