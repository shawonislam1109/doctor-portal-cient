import { useEffect, useState } from "react"

const useToken = email => {
    const [Token, setToken] = useState('');

    useEffect(() => {
        fetch(`https://doctor-portal-server-side.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            });
    }, [email])
    return [Token]
}

export default useToken; 