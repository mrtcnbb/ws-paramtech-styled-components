import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Finrota from "./pages/Finrota";
import Kredim from "./pages/Kredim";
import Header from "./components/Header";
import Paramtech from "./pages/Paramtech";
import Home from "./pages/Home";
import { useState } from "react";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: ${(props) => props.theme.bodyBackgroundColor};
  color: ${(props) => props.theme.bodyFontColor};
}
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((prev) => (prev.id === "light" ? darkTheme : lightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paramtech" element={<Paramtech />} />
          <Route path="/finrota" element={<Finrota />} />
          <Route path="/kredim" element={<Kredim />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
