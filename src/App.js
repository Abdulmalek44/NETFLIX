import { Route, Routes } from 'react-router-dom'
import { Account, Home, SignIn, SignUp } from "./Pages/index";
import { Navbar, Protected } from './Components';
import { AuthContextProvider } from './Context/AuthContext';



function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/NETFLIX" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Protected> <Account /> </Protected>} />
        </Routes>
      </AuthContextProvider>

    </>
  );
}

export default App;
