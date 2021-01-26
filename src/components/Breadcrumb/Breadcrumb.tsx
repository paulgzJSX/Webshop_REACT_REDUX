import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/category/actions'
import { RootState } from '../../index'
import { BreadCrumb, ArrowIcon, Links } from './Breadcrums.styles'

const Breadcrumb = () => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)
    
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
