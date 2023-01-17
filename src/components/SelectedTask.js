const SelectedTask = ({ taskData }) => {
  return (
    <tr>
      <th scope="row">{taskData.nome}</th>
      <td>{taskData.horarioInicial}</td>
      <td>{taskData.horarioFinal}</td>
    </tr>
  );
}

export default SelectedTask;