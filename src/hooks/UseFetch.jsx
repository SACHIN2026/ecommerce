import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/api";

const UseFetch = (endndpoint) => {
    const [data, setData] = useState();


    useEffect(() => {
        makeApiCall()
    }, [endndpoint])

    const makeApiCall = async () => {
        const response = await fetchDataFromApi(endndpoint);
        setData(response)

    }


    return {data}
}
export default UseFetch;
