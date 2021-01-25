import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { fetchCategories } from './../../api/api'
import { SideBar, SubCategories } from './Sidebar.styles'

export type Category = {
    category: string
}

const Sidebar = () => {
    const dispatch = useDispatch()

    const { data } = useQuery('categories', fetchCategories, {
        staleTime: Infinity
    })

    return (
        <SideBar>
            <h3 onClick={() => dispatch({ type: 'SELECT_CATEGORY', selectedCategory: 'all' })}>Categories</h3>
            <SubCategories>
                {data?.map((category: Category, index: number) =>
                    <span
                        key={index}
                        onClick={(e: any) => dispatch({ type: 'SELECT_CATEGORY', selectedCategory: e.target.innerHTML})}
                    >
                        {category}
                    </span>)}
            </SubCategories>
        </SideBar>
    )
}

export default Sidebar
