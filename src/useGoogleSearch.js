import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "5c7f17ed41d2a515d";

const useGoogleSearch = (term) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
 

