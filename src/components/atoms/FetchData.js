import { useEffect, useState } from "react";

const useFetch = (resource) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchData(){
    fetch(resource, {
      method: "GET",
      headers: {
        // "X-Auth-Token": 'dcbef672781f40b38ab1510aec7cbc9c',
        "X-Auth-Token": '29aa12bbfe4442c09b6e5b62a9c57466',
        },
      })
      .then((res) => {
        switch (res.status) {
          case 404:
            throw Error("Resource could not be reached");
          case 500:
            throw Error("The request was rejected by the server");
          default:
            break;
        };
        return res.json();
      })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
          .catch((err) => {
            if (err.message === "Failed to fetch"){
              setError("Lost network connection")
            }else{
              setError(err.message);
            }
            setIsLoading(false);
          })
  };
  
  useEffect(fetchData, [resource]);

  return {data, isLoading, error}
}
 
export default useFetch;