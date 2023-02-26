import { Route, Routes } from "react-router-dom"
import Counter from "./Counter";
import Welcome from "./Welcome"

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome name="Giuseppe"/>}></Route>
            <Route path="/counter" element={<Counter />}></Route>
        </Routes>
    )
}

export default App;