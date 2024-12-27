import React from "react";
import Music_Ticket from '../assets/Music_Ticket.png';
import '../CSS/Header.css';

export function Header() {
    return (
        <>
            <div className="headContainer">
                <h2 className="subTopic">Let'enjoy with us</h2>
                <h1 className="topic">MINI CONCERT</h1>
                <p className="description">ผู้ลงทะเบียน 5 ท่านแรก เข้าชมฟรี / นอกจากนั้น บัตรราคา 500 บาท</p>
                <img src={Music_Ticket} className="imgTicket" />
            </div>
        </>
    );
}

export default Header;