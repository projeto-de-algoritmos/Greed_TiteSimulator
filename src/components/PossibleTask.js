const PossibleTask = ({ index, taskData, removeTask }) => {
  const handleRemoveTaskBtn = () => removeTask(index);
  const horarioInicial = new Date(taskData.horarioInicial);
  const horarioFinal = new Date(taskData.horarioFinal);

  return (
    <tr>
      <th scope="row">{taskData.nome}</th>
      <td>{horarioInicial.toLocaleString('pt-BR')}</td>
      <td>{horarioFinal.toLocaleString('pt-BR')}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleRemoveTaskBtn}>Remover</button></td>
    </tr>
  );
}

export default PossibleTask;