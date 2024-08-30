/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MdOutlineWbSunny, MdOutlineNightlightRound } from "react-icons/md";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

// eslint-disable-next-line react/prop-types
const App = ({ theme, toggleTheme }) => {
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 border rounded-full fixed bottom-4 right-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
      >
        {theme === "light" ? (
          <MdOutlineWbSunny size={24} />
        ) : (
          <MdOutlineNightlightRound size={24} />
        )}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </div>
  );
};

export default App;
