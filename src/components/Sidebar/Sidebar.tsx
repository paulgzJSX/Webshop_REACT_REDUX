import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../../store/category/actions'
import { fetchCategories } from './../../api/api'
import { SideBar, SubCategories } from './Sidebar.styles'
import { Category } from '../../store/category/types'

const Sidebar = () => {
    const dispatch = useDispatch()

    const { data } = useQuery<Category[]>('categories', fetchCategories, {
        staleTime: Infinity
    })

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
