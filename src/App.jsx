/* eslint-disable react/jsx-key */
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"


import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from "./styles"


function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')



  function addNewTask() {
    if (task) {
      setList([...list, { id: uuidv4(), task, finished: false }])
    }
    setTask('')
  }

  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function trashTask(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={(inputValue) => setTask(inputValue.target.value)} placeholder="O que tenho para fazer..."  value={task}/>
        <Button onClick={addNewTask}>Adicionar</Button>

        <ul>
          {
            list.length === 0 ? <h3>Não há itens na lista</h3> :
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <FcCheckmark onClick={() => finishTask(item.id)} style={{ cursor: 'pointer' }} />
                  <li >{item.task}</li>
                  <FcEmptyTrash onClick={() => trashTask(item.id)} style={{ cursor: 'pointer' }} />
                </ListItem>

              ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
