import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "src/ui/common/layout/AppLayout";

const Resume = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default Resume;
