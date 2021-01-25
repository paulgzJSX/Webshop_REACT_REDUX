import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../actionCreators/ActionCreators'
import { BreadCrumb, ArrowIcon, Links } from './Breadcrums.styles'

const Breadcrumb = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: any) => state.category)
    
    return (
        <BreadCrumb>
            <Links>
                <span>Home</span>
                <ArrowIcon />
                <span onClick={() => dispatch(selectCategory('all'))}>Categories</span>
                <ArrowIcon />
                <span>{selectedCategory}</span>
            </Links>
        </BreadCrumb>
    )
}

export default Breadcrumb
