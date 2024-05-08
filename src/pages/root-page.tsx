import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default RootPage;
