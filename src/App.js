import Header from "./pages/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// import Fav from "./Fav"
import Landing from "./pages/landing"
function App()
{
    return (
        <>    
          
        
        <BrowserRouter>
        <Header/>
        {/* <Landing/> */}
        <Routes>                
                <Route path='/' element={<Landing/>}></Route>
                <Route path='/fav' element={<></>}></Route>
    
        </Routes>
        </BrowserRouter>        
        </>
    )
}

export default App