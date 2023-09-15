import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from './Pages/Home/Home';
import ProtectRouter from './Components/Protected/ProtectRouter';
import { AccountContextProvider } from './ContextAPI/AccountContext';
import Loader from './ContextAPI/Loader';
import { TweetContext, TweetsContextProvider } from './ContextAPI/TweetsContext';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div>
      <TweetsContextProvider>
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
              <Route exact path="/:username" element={
              <ProtectRouter>
                <AccountContextProvider>
                  <Loader>
                    <Profile/>
                  </Loader>
                </AccountContextProvider>
              </ProtectRouter>} />
          </Routes>
        </BrowserRouter>
        </TweetsContextProvider>

    </div>
  );
}

export default App;
