import saveToken from './saveToken';

export default async (token) => {
    const reqInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    }
    const res = await fetch('http://localhost:3000/check', reqInit);
    const resJSON = await res.json();
    return resJSON;
};
