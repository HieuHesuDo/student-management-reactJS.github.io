export default function Body({ students, removeStudent, onAdd }) {
  const studentList = students.map((student) => (
    <tbody>
    <tr key={student.id}>
      <td>{student.name}</td>
      <td>{student.birth}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>
        <button className="delete" onClick={() => removeStudent(student.id)}>Xóa</button>
        <button className="edit">Sửa</button>
      </td>
    </tr>
    </tbody>
  ));

  return (
    <div className="container">
      <div className="table">
        <button onClick={onAdd} className='addStudent'>Thêm học viên</button>
        <table id="students">
          <thead>
          <tr>
            <th>Họ Tên</th>
            <th>Năm Sinh</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
          </thead>
          {studentList}
        </table>
      </div>
    </div>
  );
}
