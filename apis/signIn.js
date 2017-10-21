import saveToken from './saveToken';

export default signInApi = async (email, password) => {
    const reqInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    }
    const res = await fetch('http://localhost:3000/signin', reqInit);
    const resJSON = await res.json();
    if(resJSON.token) await saveToken(resJSON.token);
    return resJSON;
};
