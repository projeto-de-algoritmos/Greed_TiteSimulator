const PossibleTask = ({ index, taskData, removeTask }) => {
  const handleRemoveTaskBtn = () => removeTask(index);

  return (
    <tr>
      <th scope="row">{taskData.nome}</th>
      <td>{taskData.horarioInicial}</td>
      <td>{taskData.horarioFinal}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleRemoveTaskBtn}>Remover</button></td>
    </tr>
  );
}

export default PossibleTask;