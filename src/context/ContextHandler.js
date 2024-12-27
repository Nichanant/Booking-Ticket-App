import { createContext } from "react";

export const ContextHandler = createContext({
    addNewRegister: (newRegister)=>{},
    editRegister: (id, editItem)=>{},
    deleteRegister: (id, editItem)=>{}
});

export default ContextHandler;