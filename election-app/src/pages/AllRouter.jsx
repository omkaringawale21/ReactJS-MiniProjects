import { Box } from "@mui/system";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddCandidate from "./AddCandidate";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Register from "./Register";
import VotingPanel from "./VotingPanel";

const AllRouter = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/add-candidate" element={<AddCandidate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/voting_panel/:id" element={<VotingPanel />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

export default AllRouter;
