import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/category/actions'
import { BreadCrumb, Links } from './Breadcrums.styles'
import { ArrowIcon } from '../../icons/Icons.styles'
import { RootState } from '../../index'

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
