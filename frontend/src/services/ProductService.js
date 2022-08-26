import useHttp from '../components/hooks/http.hooks'

const useProductService = () => {

    const {loading, error, request, clearError} = useHttp();

    const _apiBase = './ticker.json';

    const getAllProducts = async () => {
        const res = await request(_apiBase);
        return res.data.product.map(i => console.log(JSON.parse(i)))
    }

    const _transformProduct = (product) => {
        return {
            // name: product.name,
            // thumbnail: product.thumbnail,
            // options: [
            //     {name: product.name}
            // ]

        }
    }




    // const getAllCharacters = async () => {
    //     const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    //     return res.data.results.map(_transformCharacter)
    // }

    // const getCharacter = async (id) => {
    //     const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    //     return _transformCharacter(res.data.results[0])
    // }

    // const getAllComics = async () => {
    //     const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
    //     return res.data.results.map(_transformComics)
    // }

    // const _transformComics = (comics) => {
    //     return {
    //         name: comics.title,
    //         price: comics.prices[0].price,
    //         thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
    //         url: comics.urls[0].url
    //     }
    // }

    // const _transformCharacter = (char) => {
    //     return {
    //         name: char.name,
    //         description: char.description ? `${char.description.slice(0, 201)}...`: 'There is no description for this character',
    //         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    //         homepage: char.urls[0].url, 
    //         wiki: char.urls[1].url,
    //         id: char.id,
    //         comics: char.comics.items 
    //     }
    // }

    return {loading, error, getAllProducts, clearError}
}

export default useProductService