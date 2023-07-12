import {useEffect, useState} from 'react';

let globalState={};
let listeners=[];
let actions={};

export const useStore=(shouldListen=true)=>{
    const setState=useState(globalState)[1];
    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState);
        }
        
        return()=>{
            if(shouldListen){
            listeners=listeners.filter(li=>li !==setState)
            }
        }

    },[setState,shouldListen]);

    const dispatch =(actionIdentifier,payload)=>{
        const newState=actions[actionIdentifier](globalState,payload);
         globalState={...globalState,...newState};

         for(let listener of listeners){
            listener(globalState);
         }
    }

   return [globalState,dispatch]
}

export const initStore=(userActions,initialState)=>{
    if(initialState){
        globalState={...globalState,...initialState};

    }
    actions={...actions,...userActions};
}