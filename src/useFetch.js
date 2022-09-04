import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [errMessage, setErrMessage] = useState(null);

    
    useEffect(() => {

    const abortCont = new AbortController();

        fetch(url)
        .then(res => {
            //console.log(res)
            if(!res.ok ){
                throw Error('data resource not okay') 
            }return res.json() ;
            
        })
        .then((data) => {
            console.log(data)
            setBlogs(data)
            setIsPending(false)
            setErrMessage(null)
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setErrMessage(err.message)
                setIsPending(false)
            }
            
            
        })
        
    return () => {abortCont.abort()}
}, [url])

    
    return { data, isPending, errMessage};
}
 
export default useFetch;