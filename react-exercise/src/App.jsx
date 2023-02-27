import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Welcome from "./Welcome";
import GithubUser from "./GithubUser";
import GithubUserList from "./GitHubList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Giuseppe" />}></Route>
        <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<GithubUser />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Link to="/users">GitHub User</Link> | <Link to="/">Torna alla home</Link>{" "}
      | <Link to="/home/contact">Contatti</Link>
    </>
  );
};

export default App;
