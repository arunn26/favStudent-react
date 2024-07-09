import Header from "./pages/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddButton from "./components/AddButton"
import Display from "./components/Display"
import ArrContextProvider from "./components/ArrContextProvider"
import Fav from "./Fav"
function App()
{
    return (
        <>    
        <Header/>  
        <ArrContextProvider>            
            <AddButton/>
            <Display/> 
        <BrowserRouter>
        <Routes>                
                <Route path='/' element={<></>}></Route>
                <Route path='/fav' element={<Fav/>}></Route>
    
        </Routes>
        </BrowserRouter>        
        </ArrContextProvider>
        </>
    )
}

export default App