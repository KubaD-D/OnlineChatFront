
export const fetchData = async (url, method, data, isDataResponded = true) => {
    try {

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error(`Error fetching data: ${method} ${response.status} ${response.statusText}`);
        }

        if(isDataResponded) {
            const responseData = await response.json();
            return responseData
        } else {
            return response;
        }

    } catch(err) {
        console.error(err);
    }
}