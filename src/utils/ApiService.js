
export const postData = async (url, dataToPost) => {

    try {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(dataToPost)
            });

        if(!response.ok) {
            throw new Error(`Error posting data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch(err) {
        console.error(err);
    }

}

export const getData = async (url) => {

    try {

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if(!response.ok) {
            throw new Error(`Error getting data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch(err) {
        console.error(err);
    }

}