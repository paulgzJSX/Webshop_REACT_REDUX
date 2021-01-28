import { useDispatch } from 'react-redux'
import { selectCategory } from '../../store/category/actions'
import { useFetchCategories } from './../../api/api'
import { SideBar, SubCategories } from './Sidebar.styles'

const Sidebar = () => {
    const dispatch = useDispatch()
    const { data } = useFetchCategories()
    
    return (
        <SideBar>
            <h3 onClick={() => dispatch(selectCategory('all'))}>Categories</h3>
            <SubCategories>
                {data?.map((category, index: number) =>
                    <span
                        key={index}
                        onClick={(e: React.MouseEvent<HTMLSpanElement>) => dispatch(selectCategory((e.target as HTMLElement).innerHTML))}
                    >
                        {category}
                    </span>)}
            </SubCategories>
        </SideBar>
    )
}

export default Sidebar
