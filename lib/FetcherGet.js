import cookie from 'js-cookie';

export default async function FetcherGet(url){
        return fetch(url, {
           headers: { accessToken: cookie.get('accessToken'), refreshToken: cookie.get('refreshToken')},
            credentials:'include'
            
        })
            .then(res => res.json())
            .then(json => json.data);
}