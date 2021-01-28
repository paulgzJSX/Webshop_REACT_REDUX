import { useDispatch } from 'react-redux'
import { displayBackdrop } from '../../store/backdrop/actions'
import { useFetchProducts } from './../../api/api'
import { ProductDetails, AddToCartButton } from '../../components'
import { MainContent, ItemCard } from './Items.styles'

const Items = () => {
    const dispatch = useDispatch()
    const { data } = useFetchProducts()

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
