import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { AppRouter } from './app/routes/AppRouter.jsx';
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home/Home.jsx';
import App from './App.jsx';
import { Favorites } from './pages/favorites/Favorites.jsx';
import { Trending } from './pages/trending/Treding.jsx';

const router = createBrowserRouter([
  {
    _element: <App />,
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
    children: [
      {
        path: "/",
        element: <Favorites />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
	<AppRouter />
  </React.StrictMode>
);
