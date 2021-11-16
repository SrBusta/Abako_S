import cookie from 'js-cookie'

export default function removeCookie(){

    cookie.remove('accessToken');
    cookie.remove('refreshToken');
    

}