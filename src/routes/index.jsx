import { Route, Routes } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import MainPage from "../pages/mainPage";
import CreateVideo from "../pages/CreateVideo";

const AppRouter = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="create-video" element={<CreateVideo />} />
    </Route>
  </Routes>
);

export default AppRouter;
