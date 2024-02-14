
export const loginRequest = async (username, password) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/User/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
            credentials: "include"
        });

        if(!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();
        const responseUsername = data.username;

        return responseUsername

    } catch(err) {
        console.error(err);
    }

}

export const refreshRequest = async () => {

    try {

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/User/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if(!response.ok) {
            throw new Error("Refreshing a token failed");
        }

        const data = await response.json();
        const username = data.username;

        return username;
    } catch(err) {
        console.error(err);
    }
}

export const logoutRequest = async () => {

    try {

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/User/revoke`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        if(!response.ok) {
            console.error("Error logging out (revoking)");
        }

    } catch(err) {
        console.error(err);
    }

}