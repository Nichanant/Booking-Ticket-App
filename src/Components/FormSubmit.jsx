import React, { useContext, useState } from "react";
import '../CSS/Form.css'
import { ContextHandler } from "../context/ContextHandler";

export function FormSubmit(props) {
   const ctx = useContext(ContextHandler);

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    const clickRegister = () => {
        const newRegisterItem = {
            name : name,
            surname : surname,
            timeStamp :  new Date()
        }
        ctx.addNewRegister(newRegisterItem)
        setName("")
        setSurname("")
        props.setShowAddForm(false)
    }

    return (
        <>
            <div className="centerAll">
                <div className="form-container">
                    <label>ชื่อ : </label>
                    <input type="text" className="input-Add" onChange={(e)=>setName(e.target.value)}/>
                    <label>นามสกุล : </label>
                    <input type="text" className="input-Add" onChange={(e)=>setSurname(e.target.value)}/>
                    <div>
                        <button className="btnSubmit" onClick={clickRegister}>ลงทะเบียน</button>
                        <button className="btnX" onClick={()=>props.setShowAddForm(false)}>X</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FormSubmit