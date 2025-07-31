import SearchBar from './SearchBar';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';

const Home = () => {
  return (
    <>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  );
};

export default Home;
