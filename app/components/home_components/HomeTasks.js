"use client";

import { useState } from 'react';
import styles from '../../styles/home_styles/HomeTasks.module.css'

export default function HomeTasks() {
    const [tasks, setTasks] = useState("");
    const [listTasks, setListTasks] = useState([]);
    const [textInputEdit, setTextInputEdit] = useState("");
    const [inputEdit, setInputEdit] = useState({
        activate: false,
        taskId: null,
    });
    const [idTask, setIdTask] = useState(-1);

    const inputTasks = ({ target: { value } }) => setTasks(value);

    const saveTasks = () => {
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
            <div className={ styles.DivTasksHomeTasks }>
                {
                    listTasks.map((tasks) => (
                        <div className={ styles.DivIndividualHomeTasks }>
                            <div>
                                {
                                    (!inputEdit.activate) ?
                                    <p>{ tasks.task }</p>
                                    :
                                    (Number(inputEdit.taskId) == Number(tasks.id)) ?
                                    <input onChange={({ target: { value } }) => editTasks(tasks.id, value) } type="text" placeholder="Editar texto" />
                                    :
                                    <p>{ tasks.task }</p>
                                }
                            </div>
                            <div>
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
        </div>
    )
}