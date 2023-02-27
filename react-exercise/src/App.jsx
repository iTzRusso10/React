import { Link, Route, Routes } from "react-router-dom"
import GithubUser from "./GithubUser";
import Welcome from "./Welcome"

const App = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Welcome name="Giuseppe"/>}></Route>
            <Route path='/:username' element={<GithubUser/>}></Route>
        </Routes>
        <Link to='/username'>GitHub User</Link> | <Link to='/'>Torna alla home</Link>
        </>
    )
}

export default App;