export default function Body({ students, removeStudent }) {
  const studentList = students.map((student) => (
    <tr>
      <td>{student.name}</td>
      <td>{student.birth}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>
        <button onClick={() => removeStudent(student.id)}>Xóa</button>
        <button className="edit">Sửa</button>
      </td>
    </tr>
  ));

  return (
    <div className="container">
      <div className="table">
        <button>Thêm học viên</button>
        <table id="students">
          <tr>
            <th>Họ Tên</th>
            <th>Năm Sinh</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
          {studentList}
        </table>
      </div>
    </div>
  );
}
