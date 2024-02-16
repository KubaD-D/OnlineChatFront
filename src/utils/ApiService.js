
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

export const deleteData = async (url, data) => {

    try {

        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error(`Error deleting data: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch(err) {
        console.error(err);
    }

}

export const patchData = async (url, data) => {
    try {

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error(`Error patching data: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch(err) {
        console.error(err);
    }
}

export const putData = async (url, data, isDataResponded = true) => {
    try {

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error(`Error putting data: ${response.status} ${response.statusText}`);
        }

        if(isDataResponded) {
            const responseData = await response.json();
            return responseData
        } else {
            console.log(response);
            return response;
        }

    } catch(err) {
        console.error(err);
    }
}