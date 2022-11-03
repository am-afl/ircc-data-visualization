import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from "./pages/login/login.page";
import { RegisterPage } from "./pages/register/register.page";
import { NotFoundPage } from "./pages/not-found/not-found.page";
import { UnauthorizedPage } from "./pages/unauthorized/unauthorized.page";
import { ColorModeContext, useMode } from './common/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path='/404' element={<NotFoundPage/>}/>
            <Route path='/403' element={<UnauthorizedPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
