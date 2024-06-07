import axios from 'axios'

// const fetcher = url => axios.get(url).then(res => res.data)
export const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
}