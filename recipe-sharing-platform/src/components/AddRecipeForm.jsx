import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    if (ingredients.split(",").filter((i) => i.trim() !== "").length < 2) {
      newErrors.ingredients = "Add at least 2 ingredients separated by commas";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: instructions
        .split(".")
        .map((i) => i.trim())
        .filter((i) => i),
    };
    console.log("New Recipe:", newRecipe);

    setTitle("");
    setIngredients("");
    setInstructions("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="md:flex md:flex-col">
          <label className="block text-gray-700 font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="md:flex md:flex-col">
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div className="md:flex md:flex-col">
          <label className="block text-gray-700 font-semibold mb-1">
            Instructions (separate steps with periods)
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
