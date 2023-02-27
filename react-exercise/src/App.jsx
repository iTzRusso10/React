import { Route, Routes } from "react-router-dom"
import GithubUser from "./GithubUser";
import Welcome from "./Welcome"

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Welcome name="Giuseppe"/>}></Route>
            <Route path='/:username' element={<GithubUser/>}></Route>
        </Routes>
    )
}

export default App;