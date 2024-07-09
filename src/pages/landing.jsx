import AddButton from "../components/AddButton"
import Display from "../components/Display"
import ArrContextProvider from "../components/ArrContextProvider"
function Landing()
{
    return(
        <>
                <ArrContextProvider>            
            <AddButton/>
            <Display/> 
            </ArrContextProvider>
        </>
    )
}

export default Landing