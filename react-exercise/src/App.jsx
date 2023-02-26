import { Route, Routes } from "react-router-dom"
import Welcome from "./Welcome"

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome name="Giuseppe"/>}></Route>
        </Routes>
    )
}

export default App;