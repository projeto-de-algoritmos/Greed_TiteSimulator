import { useState, useEffect } from 'react';
import PossibleTask from '../components/PossibleTask';
import SelectedTask from '../components/SelectedTask';
import { DEFAULT_TASKS } from '../consts/tasks';
import { getTiteSchedule } from '../utils/greedy';

const HomePage = () => {
  const [tasks, setTasks] = useState(null);
  const [result, setResult] = useState(null);
  const [isResultMode, setIsResultMode] = useState(false);

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

  const handleResultModeBtn = () => {
    setResult(getTiteSchedule(tasks))
    setIsResultMode(!isResultMode)
  };

  const renderSelectedTasks = result?.map((taskData, index) => <SelectedTask key={`task-${index}`} taskData={taskData} />);
  const renderPossibleTasks = tasks?.map((taskData, index) => <PossibleTask key={`task-${index}`} index={index} taskData={taskData} removeTask={removeTask} />);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    !!tasks && localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="home">
      <div className='container'>
        {
          isResultMode ?
            (<>
              <section className="text-center">
                <h1>Tite Simulator</h1>
                <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite precisa da sua ajuda pra fazer o máximo de atividades durante as férias dele.</p>
                <p>Clique no botão "Planejar Férias" para ver a nova agenda do professor.</p>
              </section>
              <section className='button-list'>
                <button type="button" className="btn btn-primary" onClick={handleResultModeBtn}>Retornar</button>
              </section >
              <section>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Tarefa</th>
                      <th scope="col">Início</th>
                      <th scope="col">Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderSelectedTasks}
                  </tbody>
                </table>
              </section>
            </>)
            :
            (<>
              <section className="text-center">
                <h1>Tite Simulator</h1>
                <p>Depois de vergonhosamente perder a copa do mundo para a Croácia, Tite precisa da sua ajuda pra planejar as férias dele.</p>
                <p>Adicione ou remova tarefas e clique no botão "Planejar Férias" para ver a nova agenda do professor.</p>
              </section>
              <section className='button-list'>
                <button type="button" className="btn btn-success" onClick={handleResultModeBtn}>Planejar Férias</button>
              </section >
              <section>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Tarefa</th>
                      <th scope="col">Início</th>
                      <th scope="col">Final</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderPossibleTasks}
                  </tbody>
                </table>
              </section>
            </>)
        }
      </div>
    </div>
  );
}

export default HomePage;
