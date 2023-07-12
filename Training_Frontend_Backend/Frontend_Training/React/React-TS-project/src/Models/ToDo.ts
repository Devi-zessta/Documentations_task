import { v4 as uuid } from "uuid";

class ToDo {
    id:string;
    item:string;

    constructor(todoitem:string){
       this.item=todoitem;
       this.id=uuid();

    }
    
}

export default ToDo;