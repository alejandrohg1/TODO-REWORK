import Sidebar from "./layout/Sidebar";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    <>
    <div className="noise"></div>
      <div className='App'>
        <Sidebar></Sidebar>
        <TodoApp></TodoApp>
      </div>
    </>
  );
}

export default App;
