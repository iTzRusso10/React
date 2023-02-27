import { Link, Route, Routes } from "react-router-dom"
import GithubUser from "./GithubUser";
import NotFound from "./NotFound";
import Welcome from "./Welcome"

const App = () => {
    return(
        <>
        <Routes>
            <Route path="/home" element={<Welcome name="Giuseppe"/>}></Route>
            <Route path='/:username' element={<GithubUser/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Link to='/username'>GitHub User</Link> | <Link to='/home'>Torna alla home</Link> | <Link to="/home/contact">Contatti</Link>
        </>
    )
}

export default App;