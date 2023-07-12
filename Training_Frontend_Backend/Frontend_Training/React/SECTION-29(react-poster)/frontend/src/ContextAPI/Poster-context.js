import { createContext, useReducer, useState } from "react";
import React from "react";

const PosterContext = React.createContext({
  NewPoster: false,
  NewPostClick: () => {},
  CancelPostClick: () => {},
  Data:{post:'',name:''},
  DataDispatch:()=>{}
});
export default PosterContext;

function reducer(state,action){
    if(action.type==='Add Data')
    {
        return[...state,{ post:action.post,name:action.name}]
    }

}
export const PosterContextProvider = (props) => {
  const [IsNewPoster, SetIsNewPoster] = useState(false);
  const [Data, dispatch] = useReducer(reducer, []);
  console.log("data",Data)

  const NewPosterClickHandler = () => {
    SetIsNewPoster(true);
  };
  const CancelButtonHandler = () => {
    SetIsNewPoster(false);
  };

  const DataDispatch=(data)=>{
    
    dispatch({type:"Add Data",...data});
    SetIsNewPoster(false)
  }
  const ContextValue = {
    NewPoster: IsNewPoster,
    NewPostClick: NewPosterClickHandler,
    CancelPostClick: CancelButtonHandler,
    Data:Data,
    DataDispatch:DataDispatch
  };

  return (
    <PosterContext.Provider value={ContextValue}>
      {props.children}
    </PosterContext.Provider>
  );
};
