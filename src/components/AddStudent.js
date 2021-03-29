import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import React from "react";

const AddStudent = ({ onAdd, cancelAddStudent }) => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, birth, email, phone });
    setName("");
    setBirth("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="bodyOverlay">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="exit-icon-wrap">
          <FaTimes className="exit-icon" onClick={cancelAddStudent}/>
        </div>
        <div className='title'><h2>Thêm học viên</h2></div>
        <div className="input-wrap">
          <label>Họ và tên</label>
          <input
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label>Năm sinh</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label>Số điện thoại</label>
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <input type="submit" value="Thêm học sinh" className="btn" />
      </form>
    </div>
  );
};

export default AddStudent;
