import React from "react";

import Card from "../UI/Card";
import "./Search.css";
import Ingredients from "./Ingredients";

const Search = React.memo((props) => {
  const { OnLoadData } = props;
 
  const [FilterValue, SetFilterValue] = React.useState("");
  const [IsLoading,SetIsLoading] =React.useState(false)
  const Value=React.useRef("");

  function InputChangeHandler(event) {
    SetFilterValue(event.target.value);
  }
  
  React.useEffect(() => {
    const timer=setTimeout(() => {
      if(FilterValue===Value.current.value){
        SetIsLoading(true);
      const FetchData = async () => {
        const query =
          FilterValue.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${FilterValue}"`;
        const Data = await fetch(
          "https://revesion-43e40-default-rtdb.asia-southeast1.firebasedatabase.app/indegredients.json" +
            query
        );
        // await console.log(Data.json());
        const data = await Data.json();
        const FetchedData = [];
        for (const key in data) {
          FetchedData.push({
            id: key,
            Title: data[key].title,
            Amount: data[key].Amount,
          });
         
          OnLoadData(FetchedData);
        }
      };
      FetchData();
    }
    }, 500);
    return ()=>{
         clearTimeout(timer);
    }
  }, [FilterValue, OnLoadData,Value]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={InputChangeHandler} ref={Value}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
