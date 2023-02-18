import express from 'express';
import { getToDos,saveToDo,updateTodo,deleteToDo} from "../controllers/ToDoController.js";

const router = express.Router();

router.get('/todos',getToDos);

router.post("/save",saveToDo)

router.post('/update',updateTodo)

router.delete("/delete",deleteToDo)


export default router;