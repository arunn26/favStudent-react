import AddButton from "./components/AddButton"
import ArrContextProvider from "./components/ArrContextProvider"
function Landing() {
    return (
        <>
            <ArrContextProvider>
                <AddButton />
            </ArrContextProvider>
        </>
    )
}

export default Landing