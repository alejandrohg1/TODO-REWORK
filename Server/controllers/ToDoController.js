import ToDo from '../models/ToDoModel.js'

export const getToDos = async (req, res) => {
  try {
    const todo = await ToDo.find();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

export const saveToDo = async (req, res) => {
  try {
    const { text, active } = req.body;

    const newTodo = new ToDo({
      text,
      active,
    })

    const saveTodo = await newTodo.save();
    res.status(201).json(saveTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

export const updateTodo = async (req, res) => {
  try {
    const { _id, text, active } = req.body;

    console.log(`id ===> ${_id}`);

    await ToDo.findByIdAndUpdate(_id, { text, active });
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

export const deleteToDo = async (req, res) => {
  try {
    const {_id} = req.body;
    await ToDo.findByIdAndDelete(_id);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }


}