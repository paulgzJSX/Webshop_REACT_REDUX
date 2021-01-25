import { useSelector } from 'react-redux'
import { BreadCrumb, ArrowIcon, Links } from './Breadcrums.styles'

const Breadcrumb = () => {
    const selectedCategory = useSelector((state: any) => state.category)
    
    return (
        <BreadCrumb>
            <Links>
                <span>Home</span>
                <ArrowIcon />
                <span>Categories</span>
                <ArrowIcon />
                <span>{selectedCategory}</span>
            </Links>
        </BreadCrumb>
    )
}

export default Breadcrumb
