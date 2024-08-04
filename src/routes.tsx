import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([{
  path: '/' , element: <App />, children: [
    {index: true, element: <HomePage />},
    {path: '/rooms', element: <Rooms />},
    {path: '/rooms/:slug', element: <RoomDetail />}
  ],
  errorElement: <ErrorPage />
}]);

export default router;