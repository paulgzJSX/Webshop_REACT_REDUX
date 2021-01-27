import axios from 'axios'
import { Item } from '../store/cart/types'
import { Category } from '../store/category/types'

const baseUrl = process.env.REACT_APP_BASE_URL
const products = process.env.REACT_APP_PRODUCTS
const categories = process.env.REACT_APP_CATEGORIES
const singleCategory = process.env.REACT_APP_CATEGORY

export const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get(`${baseUrl}${products}${categories}`)
    return data
}

export const fetchProducts = async (category: string): Promise<Item[]> => {
    if (category === 'all') {
        const { data } = await axios.get(`${baseUrl}${products}`)
        return data
    } else {
        const { data } = await axios.get(`${baseUrl}${products}${singleCategory}/${category}`)
        return data
    }
}