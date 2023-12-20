import "./App.css";

import Router from "../src/routes/sections";
import ThemeProvider from "../src/theme";

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
