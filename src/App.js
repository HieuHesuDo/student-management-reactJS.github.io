import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Modal from "./components/Modal";
import "./Body.css";
import "./Modal.css";
import "./Header.css";
import { STUDENTS } from "./StudentData";

function App() {
  const [students, setStudents] = useState(STUDENTS);
  const [buttonID, setButtonID] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function removeStudent(studentID) {
    setModalVisible(true)
    setButtonID(studentID)
  }
  function confirmDelete(){
    const deleteStudents = students.filter(
      (student) => student.id !== buttonID
    );
    setStudents(deleteStudents);
    setModalVisible(false)
  }

  function cancleDelete(){
    setModalVisible(false)
  }


  return (
    <main>
      <Header></Header>
      <Body students={students} removeStudent={removeStudent}></Body>
      {modalVisible && <Modal message="Are you sure to delete?" confirmDelete={confirmDelete} cancleDelete={cancleDelete}/>}
    </main>
  );
}

export default App;
