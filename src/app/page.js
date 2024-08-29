'use client';

import Login from "./pages/login";
import SignUp from "./pages/sign_up";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StudentsList from "./pages/students/list";
const defaultTheme = createTheme();

export default function Home() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <StudentsList /> 
      </ThemeProvider>
  );
}
