

export default function VerficacionTokenUsuario(token,token2) {
    
    if (!token && !token2) {
        
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            }
        }
    }
};
