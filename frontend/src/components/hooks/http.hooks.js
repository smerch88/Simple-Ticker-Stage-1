import { useState, useCallback } from "react";
import axios from 'axios';

const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type': 'aplication/json'}) => {

        setLoading(true);

        try {
            const response = await axios(url,{ method, body, headers});

            

            const data = await response

            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }

    }, []);

    const clearError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, error, request, clearError}
}

export default useHttp;