import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { DEFAULT_TASKS } from '../consts/tasks';
import { getTiteSchedule } from '../utils/greedy';

const HomePage = () => {
  const [tasks, setTasks] = useState(null);
  const [isResultMode, setIsResultMode] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);

  const loadTasks = () => {
    const loadedTasks = localStorage.getItem('tasks');
    if (!!loadedTasks) {
      setTasks(JSON.parse(loadedTasks));
    } else {
      setTasks(DEFAULT_TASKS);
    }
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  const handleCreateModeBtn = () => setIsCreateMode(!isCreateMode);
  const handleResultModeBtn = () => {
    getTiteSchedule(tasks)
    setIsResultMode(!isResultMode)
  };
  const handleResetLocalStorageBtn = () => localStorage.clear();

  const renderTaskCards = tasks?.map((taskData, index) => <TaskCard key={`task-${index}`} index={index} taskData={taskData} removeTask={removeTask} />);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    !!tasks && localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="home">
      <div className='container'>
        <section className="text-center">
          <h1>Tite Simulator</h1>
          <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite precisa da sua ajuda pra planejar as férias dele.</p>
          <p>Adicione ou remova tarefas e clique no botão "Planejar Férias" para ver a nova agenda do professor.</p>
        </section>
        {
          isResultMode ?
            (<>
              <section className='button-list'>
                <button type="button" className="btn btn-primary" onClick={handleResultModeBtn}>Retornar às tarefas</button>
              </section >
            </>)
            :
            (<>
              <section className='button-list'>
                <button type="button" className="btn btn-primary" onClick={handleResetLocalStorageBtn}>Reiniciar tarefas</button>
                <button type="button" className="btn btn-primary" onClick={handleCreateModeBtn}>Adicionar Tarefa</button>
                <button type="button" className="btn btn-success" onClick={handleResultModeBtn}>Planejar Férias</button>
              </section >
              <section>
                <div className="row row-cols-3">
                  {renderTaskCards}
                </div>
              </section>
            </>)
        }
      </div>
    </div>
  );
}

export default HomePage;
