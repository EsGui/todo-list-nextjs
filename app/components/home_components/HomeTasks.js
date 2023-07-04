"use client";

import { useState } from 'react';
import styles from '../../styles/home_styles/HomeTasks.module.css'

export default function HomeTasks() {
    const [tasks, setTasks] = useState("");
    const [listTasks, setListTasks] = useState([]);
    const [inputEdit, setInputEdit] = useState({
        activate: false,
        taskId: null,
    });
    const [idTask, setIdTask] = useState(-1);

    const inputTasks = ({ target: { value } }) => {
        if (value.length > 0 && value.length < 30) {
            setTasks(value)
        }
    };

    const saveTasks = () => {
        if (listTasks.length < 6) {
            if (tasks.length > 0) {
                if (listTasks.length > 0) {
                    setListTasks([...listTasks, {
                        id: listTasks[listTasks.length - 1].id + 1,
                        task: tasks
                    }]);
                } else {
                    setListTasks([...listTasks, {
                        id: 0,
                        task: tasks
                    }]);
                }
            } else {
                alert("O campo de tarefa não pode estar vazio")
            }
            setTasks("");
        } else {
            alert("Limite de tarefas atingidas");
            setTasks("");
        }
    };

    const deleteTasks = (idTask) => 
        setListTasks((prevState) => 
            [...prevState].filter((task) => Number(task.id) != Number(idTask)));

    const activateInputEdit = (idTask) => {
        setIdTask(idTask);
        setInputEdit((prevState) => ({ ...prevState, activate: !prevState.activate, taskId: idTask }));
    }

    const editTasks = (idTask, value) => {
        const taskEdit = listTasks.map((task) => {
            if (Number(task.id) == Number(idTask)) {
                return {
                    id: idTask,
                    task: value
                }
            }
            return task
        });
        setListTasks(taskEdit);
        setTasks("");
        console.log(value);
    }

    return (
        <div className={ styles.DivFatherHomeTasks }>
            <div className={ styles.DivInputHomeTasks }>
                <input value={ tasks } onChange={ inputTasks } type="search" placeholder="Digite aqui sua tarefa" />
                <button onClick={ saveTasks } type="button">Salvar</button>
            </div>
            {   
                (listTasks.length > 0) ? 
                    <div className={ styles.DivTasksHomeTasks }>
                        {
                            listTasks.map((tasks) => (
                                <div className={ styles.DivIndividualHomeTasks }>
                                    <div className={ styles.DivTasksListHomeTasks }>
                                        {
                                            (!inputEdit.activate) ?
                                            <div className={ styles.DivCheckListHomeTasks }>
                                                <div>
                                                    <input type="checkbox" />
                                                </div>
                                                <div>
                                                    <p>{ tasks.task }</p>
                                                </div>
                                            </div>
                                            :
                                            (Number(inputEdit.taskId) == Number(tasks.id)) ?
                                            <input onChange={({ target: { value } }) => editTasks(tasks.id, value) } type="text" placeholder="Editar texto" />
                                            :
                                            <p>{ tasks.task }</p>
                                        }
                                    </div>
                                    <div className={ styles.DivTasksButtonHomeTasks }>
                                        {
                                            (!inputEdit.activate) ?
                                            <button onClick={ () => activateInputEdit(tasks.id) } type="button">Editar</button>
                                            :
                                            (Number(inputEdit.taskId) == Number(tasks.id)) ?
                                            <button onClick={ () => activateInputEdit(tasks.id) } type="button">Salvar</button>
                                            :
                                            <button onClick={ () => activateInputEdit(tasks.id) } type="button">Editar</button>
                                        }
                                        <button onClick={ () => deleteTasks(tasks.id) } type="button">Deletar</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                :
                <div className={ styles.DivNoTasks }>
                    <h1>Suas tarefas</h1>
                </div>
            }
        </div>
    )
}