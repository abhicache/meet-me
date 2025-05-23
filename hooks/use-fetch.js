import { useState } from 'react';

const useFetch = (cb) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const response = await cb(...args);
            setData(response);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fn };
}

export default useFetch;