import React, { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("pages/home"));
const Client = lazy(() => import("pages/client"));
const Error = lazy(() => import("pages/error"));

const TRACKING_ID = "UA-243699135-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const AppRoutes = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Routes history={history}>
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
