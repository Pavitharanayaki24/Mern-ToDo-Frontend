import axios from 'axios';

const baseurl = "https://mern-todo-backend-6dnf.onrender.com";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(`${baseurl}/get`); // assuming the route is /todos
    setToDo(response.data);
  } catch (error) {
    console.error("Error fetching to-dos:", error);
  }
};

const postToDo = async (text,setText,setToDo) => {
  axios
  .post(`${baseurl}/save`,{text})
  .then((data) => {
    console.log(data);
    setText("")
    getAllToDo(setToDo)
  }) 
  .catch((err) => {
    console.log(err);
  })

}
const updateTodo= async (toDoId,text,setToDo,setText,setisUpdating) => {
    axios.put(`${baseurl}/update/${toDoId}`, { text })

  .then((data) => {
    setText("")
    setisUpdating(false)
    getAllToDo(setToDo)
  }) 
  .catch((err) => {
    console.log(err);
  })
}
const deleteToDo = (toDoId, setToDo) => {
  console.log(toDoId);
  axios 
  .delete(`${baseurl}/delete/${toDoId}`) 
  .then(() => { 
    setToDo((prevToDos) => prevToDos.filter((todo) => todo._id !== toDoId));

    getAllToDo (setToDo)
 
  }) 
  .catch((err) => {
    console.log(err);
  })
  };


export { getAllToDo ,postToDo,updateTodo,deleteToDo};
