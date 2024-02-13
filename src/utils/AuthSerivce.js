
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
        const jwtToken = data.jwtToken;

        return jwtToken

    } catch(err) {
        console.error(err);
    }

}