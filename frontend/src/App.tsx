import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Signup from "./pages/Login/Signup.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className='mt-17'>
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="signup" element={<Signup/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}


export default App
