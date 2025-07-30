import { useState } from 'react'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
