import React from "react";
import { useState } from "react";
import "../CSS/Item.css";


export function Item({ id, name, surname, timeStamp, deleteRegisterFX, editRegisterFX, index }) {
  const [showEdit, setShowEdit] = useState(false)
  const [curName, setCurName] = useState(name)
  const [curSurname, setCurSurname] = useState(surname)

  const numStyle = (index > 5) ? "number-pay" : "number-free";
  // const countTicket = (index > 5) ? "บัตร 500฿" : "บัตรฟรี";

  const clickRecordEdit = () => {
    const editItem = {
      id: id,
      name: curName,
      // ticket: countTicket,
      timeStamp: timeStamp,
      surname: curSurname
    }

    editRegisterFX(id, editItem)
    setShowEdit(false)
  }


  return (
    <>
      <div className="centerAllList">

        {(showEdit) ?

          <div className="item-container">
            <div className={numStyle}>
              <div className="textRank">ลำดับ <div className="number">{index}</div></div>
            </div>

            <div className="input-edit">
              <input type="text" placeholder="กรอกชื่อ"
                value={curName}
                onChange={(e) => { setCurName(e.target.value) }} />

              <input type="text" placeholder="กรอกนามสกุล"
                value={curSurname}
                onChange={(e) => { setCurSurname(e.target.value) }} />
            </div>

            <div className="registerTime">
              <p>เวลา ณ ลงทะเบียน</p>
              <p>{timeStamp.toLocaleString()}</p>
            </div>
            <p className="ticket-free">{(index > 5) ? "บัตร 500฿" : "บัตรฟรี"}</p>
            <div className="btn-container">
              <button className="btnEdit" onClick={clickRecordEdit}>บันทึก</button>
              <button className="btnItemX" onClick={() => { setShowEdit(false) }}>X</button>
            </div>
          </div>

          :

          <div className="item-container">
            <div className={numStyle}>
              <div className="textRank">ลำดับ <div className="number">{index}</div></div>
            </div>
            <div className="name">
              <p>{name}  {surname}</p>
            </div>
            <div className="registerTime">
              <p>เวลา ณ ลงทะเบียน</p>
              <p>{timeStamp.toLocaleString()}</p>
            </div>
            <p className="ticket-free">{(index > 5) ? "บัตร 500฿" : "บัตรฟรี"}</p>
            <div className="btn-container">
              <button className="btnEdit" onClick={() => { setShowEdit(true) }}>แก้ไข</button>
              <button className="btnDelete" onClick={() => { deleteRegisterFX(id) }}>ยกเลิกบัตร</button>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Item