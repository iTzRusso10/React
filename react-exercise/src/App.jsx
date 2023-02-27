import { Link, Route, Routes } from "react-router-dom";
import GithubUserList from "./GitHubList";
import GithubUser from "./GithubUser";
import NotFound from "./NotFound";
import Welcome from "./Welcome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Giuseppe" />}></Route>
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h1>Add a user and select it</h1>}></Route>
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
