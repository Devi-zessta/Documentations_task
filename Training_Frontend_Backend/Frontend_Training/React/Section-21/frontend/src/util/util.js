import { redirect } from "react-router-dom";

export function  getAuthToken(){
    const token=localStorage.getItem('token');
    const duration=getAuthDuration();
    if(!token){
        return null;
    }
    if(duration<0){
        return 'EXPIRED';
    }
    return token;
}
export function getAuthDuration(){
    const StoredExpirationDate=localStorage.getItem('expiration');
    const ExpirationDate=new Date(StoredExpirationDate);
    const now=new Date();
    const duration=ExpirationDate.getTime()-now.getTime();
    return duration;

}
export function tokenLoader(){
    return getAuthToken();

}

export function loader(){
    const token=getAuthToken();
    if(!token){
        return redirect('/auth');
    }
    return null;
}