import React, { useContext } from "react";
import Item from "./Item";
import "../CSS/ListItem.css";
import { ContextHandler } from "../context/contextHandler";


export function ListItem({ registerList, deleteRegister, editRegister }) {
    const totalRegister = registerList.length;
    const ctx = useContext(ContextHandler);

    let i = 1
    return (
        <>
            <h2 className="headList">รายชื่อผู้ลงทะเบียน : <span className="people">รวม {totalRegister} คน</span></h2>

            {registerList.map((e)=>(
                <Item
                index={i++}
                deleteRegisterFX={ctx.deleteRegister}
                editRegisterFX={ctx.editRegister}
                key={e.id}
                id={e.id}
                name={e.name}
                surname={e.surname}
                // ticket={e.ticket}
                timeStamp={e.timeStamp}
                />
            ))}
        </>
    );
}

export default ListItem