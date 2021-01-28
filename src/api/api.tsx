import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { RootState } from '../index'
import { Item } from '../store/cart/types'
import { Category } from '../store/category/types'

const baseUrl = process.env.REACT_APP_BASE_URL
const products = process.env.REACT_APP_PRODUCTS
const categories = process.env.REACT_APP_CATEGORIES
const singleCategory = process.env.REACT_APP_CATEGORY

export const useFetchProducts = () => {
    const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)

    return useQuery(['products', selectedCategory], async (): Promise<Item[]> => {
        if (selectedCategory === 'all') {
            const { data } = await axios.get<Item[]>(`${baseUrl}${products}`)
            return data
        } else {
            const { data } = await axios.get<Item[]>(`${baseUrl}${products}${singleCategory}/${selectedCategory}`)
            return data
        }
    },
        { staleTime: Infinity }
    )
}

export const useFetchCategories = () => {
    return useQuery('categories', async (): Promise<Category[]> => {
        const { data } = await axios.get<Category[]>(`${baseUrl}${products}${categories}`)
        return data
    }, {
        staleTime: Infinity
    })
}