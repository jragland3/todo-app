import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types for the global state
interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

// Define the types for the global state
interface GlobalState {
  displayTextInput: boolean;
  toDoList: TodoItem[];
  changeDisplay: (newValue: boolean) => void;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

// Create the context with the specified type
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Provider component that will wrap around app
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [displayTextInput, setDisplay] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<TodoItem[]>([]);

  // A function to change the global variable
  const changeDisplay = (newValue: boolean) => {
    setDisplay(newValue);
  };

  // A function to add an item to the list
  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
        id: Date.now(),
        text,
        completed: false,
    };
    setToDoList((prevList) => [...prevList, newTodo]);
  };

  // A function that removes an item from the visible list
  const removeTodo = (id: number) => {
    setToDoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  // A function that toggles the completed boolean which allows strikethrough on the text
  const toggleTodo = (id: number) => {
    setToDoList((prevList) => 
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
    
    return (
        <GlobalContext.Provider
          value={{
            displayTextInput,
            toDoList,
            changeDisplay,
            addTodo,
            removeTodo,
            toggleTodo,
          }}
        >
          {children}
        </GlobalContext.Provider>
    );
  };

// Custom hook to use the global state
export const useGlobal = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
