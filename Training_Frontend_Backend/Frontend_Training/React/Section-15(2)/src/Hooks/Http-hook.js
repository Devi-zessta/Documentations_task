import {useState,useCallback} from 'react'

const useHttp=()=>{
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const sendRequest = useCallback(async (RequestConfig,applyData) => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(
     RequestConfig.url,{
        headers:RequestConfig.headers?RequestConfig.headers:{} ,
        method:RequestConfig.method ? RequestConfig.method :'GET',
        body:RequestConfig.body?JSON.stringify(RequestConfig.body):null,
     }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();

    applyData(data);
  } catch (err) {
    setError(err.message || "Something went wrong!");
  }
  setIsLoading(false);
},[]);
return{
    isLoading:isLoading,
    error:error,
    sendRequest:sendRequest
}
}
export default useHttp;
