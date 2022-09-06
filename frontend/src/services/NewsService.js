import useHttp from '../components/hooks/http.hooks'

const useNewsService = () => {

    const {request} = useHttp();

    const _apiBase = './newsList.json';

    const getAllNews = async () => {
        const res = await request(_apiBase);
        return res.data.news
    }


    return { getAllNews }
}

export default useNewsService;