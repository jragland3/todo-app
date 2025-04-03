import './App.css';
import { GlobalProvider } from './GlobalContext';
import Header from './components/Header';
import TextInput from './components/TextInput';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <TextInput />
      <ToDoList />
    </GlobalProvider>
  )
}

export default App
