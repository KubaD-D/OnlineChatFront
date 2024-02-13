import { useEffect, useState } from "react";

const useFetch = (url, ignore = false) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        if(!ignore) {

            fetch(url, {
                credentials: "include"
            })
                .then(response => response.json())
                    .then(data => {
                        setData(data);
                    })
                    .catch(err => console.error(err))
                .catch(err => console.error(err));

        }

    }, [url]);

    return {data};
}

export default useFetch;