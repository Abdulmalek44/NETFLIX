import { Route, Routes } from 'react-router-dom'
import { Account, Home, SignIn, SignUp } from "./Pages/index";
import { Navbar } from './Components';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;


// #E50914 #B00710