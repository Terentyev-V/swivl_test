
import Header from './components/Header';
import MainPage from './components/MainPage';
import { ThemeProvider } from "styled-components";

import {
  theme
} from "./styles";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header />
    <MainPage />
    </ThemeProvider>
    </>
  );
}

export default App;
