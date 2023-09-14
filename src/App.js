import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from './Pages/Home/Home';
import ProtectRouter from './Components/Protected/ProtectRouter';
import { AccountContextProvider } from './ContextAPI/AccountContext';
import Loader from './ContextAPI/Loader';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={
            <ProtectRouter>
              <AccountContextProvider>
                <Loader>
                  <Home />
                </Loader>
              </AccountContextProvider>
            </ProtectRouter>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
