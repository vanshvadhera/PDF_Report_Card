import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import CustomNavbar from "./Components/UserInterface/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "./Components/Data/Slices/UserDataSlice";
import Class2_Term2 from "./Components/Pages/Classes/Class2/Class2_Term2";
import NoPage from "./Components/Pages/NoPage/NoPage";
import Class1_Term2 from "./Components/Pages/Classes/Class1/Class1_Term2";
import Class1_Term1 from "./Components/Pages/Classes/Class1/Class1_Term1";
import Nursery_Term1 from "./Components/Pages/Classes/Nursery/Nursery_Term1";
import Class2_Term1 from "./Components/Pages/Classes/Class2/Class2_Term1";
import Ukg_Term1 from "./Components/Pages/Classes/UKG/UKG_Term1";

const RootPage = () => {
  const userState = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  console.log(userState);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(userDataActions.setUser(localStorage.getItem("user")));
    }
  }, [dispatch]);

  if (!userState.user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CustomNavbar>
              <Dashboard />
            </CustomNavbar>
          }
        />
        <Route
          path="/classnur/term1"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Nursery_Term1 />
            </CustomNavbar>
          }
        />
        <Route
          path="/classukg/term1"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Ukg_Term1 />
            </CustomNavbar>
          }
        />
        <Route
          path="/classi/term1"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Class1_Term1 />
            </CustomNavbar>
          }
        />
        <Route
          path="/classi/term2"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Class1_Term2 />
            </CustomNavbar>
          }
        />
        <Route
          path="/classii/term1"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Class2_Term1 />
            </CustomNavbar>
          }
        />
        <Route
          path="/classii/term2"
          element={
            <CustomNavbar>
              {/* eslint-disable-next-line */}
              <Class2_Term2 />
            </CustomNavbar>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootPage;
