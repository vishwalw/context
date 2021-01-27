import logo from "./logo.svg";
import "./App.css";
import ThemeContextProvider from "./Context/Themecontext";
import Navbar from "./Component/Navbar";
import Booklist from "./Component/Booklist";
import ThemeToggle from "./Component/themeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
