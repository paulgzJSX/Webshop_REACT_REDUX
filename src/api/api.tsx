import axios from 'axios'

export const fetchCategories = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/categories')
    return data
}

export const fetchProducts = async (category: string) => {
    if (category === 'all') {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        return data
    } else {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        return data
    }
}