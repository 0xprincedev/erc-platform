import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("pages/home"));
const Client = lazy(() => import("pages/client"));
const Error = lazy(() => import("pages/error"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/client_0ahUKEwjNs_yh2Or6AhUkposKHWzVCu0Q4dUDCA8"
          element={<Client />}
        />
        <Route path="*" element={<Error />} />
        <Route component={Error} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        autoDismiss={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        icon={true}
        theme={"colored"}
        pauseOnHover={false}
        rtl={false}
      />
    </>
  );
};

export default AppRoutes;
