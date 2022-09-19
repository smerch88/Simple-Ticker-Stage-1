import useHttp from '../components/hooks/http.hooks'

const useProductService = () => {

    const {loading, error, request, clearError} = useHttp();

    const _apiBase = './ticker.json';
    const _apiProducts = '/../product.json';
    const _apiFilter = './filterList.json'

    const getAllProducts = async () => {
        const res = await request(_apiBase);
        return res.data.product
    }

    const getProducts = async () => {
        const res = await request(_apiProducts);
        return res.data.product
    }



    const getAllFilters = async () => {
        const res = await request(_apiFilter);
        return res.data.filter
    }

    return {loading, error, getAllProducts, getAllFilters, getProducts, clearError}
}

export default useProductService