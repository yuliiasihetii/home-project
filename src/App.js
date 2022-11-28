import Pages from "./pages/Pages";
import '../src/style/css/style.css'
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom'
import Search from "./components/Search";
import Logo from "./components/Logo";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
