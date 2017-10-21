import getToken from './getToken';
import saveToken from './saveToken';
import checkToken from './checkToken';

const wait1sec = () => (new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
}))

export default async () => {
    await wait1sec();
    const token = await getToken();
    if (!token) throw new Error('Token does not exist.');
    const tokenObj = await checkToken(token);
    if(!tokenObj.token) throw new Error('Token is invalid.');
    await saveToken(tokenObj.token);
    return tokenObj;
};
