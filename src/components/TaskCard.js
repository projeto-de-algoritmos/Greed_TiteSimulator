const TaskCard = ({ index, taskData, removeTask }) => {
  const handleRemoveTaskBtn = () => removeTask(index);

  return (
    <div className="col mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-0">{taskData.nome}</h5>
        </div>
        <div className="card-footer text-left">
          <p className="card-text mb-0"><small>Início: {taskData.horarioInicial}</small></p>
          <p className="card-text mb-0"><small>Final: {taskData.horarioFinal}</small></p>
        </div>
        <div className="card-footer text-right">
          <button type="button" className="btn btn-danger" onClick={handleRemoveTaskBtn}>Remover</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;