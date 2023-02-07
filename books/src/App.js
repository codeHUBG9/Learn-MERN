import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
const App = () => {
  return (
    <div className='app'>
      <div className='top'>dsfds</div>
      <div className='main-page'>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className='bottom'>
        <span>Copyright &copy; 2023-2025 - Books-Hub</span>
      </div>
    </div>
  );
};
export default App;
