import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Modal from "./components/Modal";
import AddStudent from "./components/AddStudent";
import "./Body.css";
import "./Modal.css";
import "./Header.css";
import "./AddStudent.css";
import { STUDENTS } from "./StudentData";

function App() {
  const [students, setStudents] = useState(STUDENTS);
  const [buttonID, setButtonID] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);

  function removeStudent(studentID) {
    setModalVisible(true);
    setButtonID(studentID);
  }

  function confirmDelete() {
    const deleteStudents = students.filter(
      (student) => student.id !== buttonID
    );
    setStudents(deleteStudents);
    setModalVisible(false);
  }

  function cancleDelete() {
    setModalVisible(false);
  }

  function addStudent(student) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newStudent = { id, ...student };
    setStudents([...students, newStudent]);
    setShowAddStudent(false);
  }

  const cancelAddStudent = () => {
    setShowAddStudent(false);
  };

  return (
    <main>
      <Header></Header>
      <Body
        onAdd={() => setShowAddStudent(!showAddStudent)}
        students={students}
        removeStudent={removeStudent}
      ></Body>
      {showAddStudent && (
        <AddStudent onAdd={addStudent} cancelAddStudent={cancelAddStudent} />
      )}
      {modalVisible && (
        <Modal
          message="Bạn có chắc muốn xóa?"
          confirmDelete={confirmDelete}
          cancleDelete={cancleDelete}
        />
      )}
    </main>
  );
}

export default App;
