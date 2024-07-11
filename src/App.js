// import Header from "./pages/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fav from "./Fav"
import Landing from "./landing"
import Header from "./components/Header"
import Display from "./components/Display"
import ArrContextProvider from "./components/ArrContextProvider"
function App()
{    
    return (
        <>    
            <BrowserRouter>
                <ArrContextProvider>
                    <Display>
                        <Header />
                        <Routes>                
                            <Route path='/' element={<Landing />} />
                            <Route path='/fav' element={<Fav />} />
                        </Routes>
                    </Display>
                </ArrContextProvider>
            </BrowserRouter>
        </>
    )
}

export default App