import { Link, Outlet } from "react-router-dom";

const GithubUserList = () => {
  return (
    <div>
      <Link to="mariowebcs">Mario D'andrea</Link> | <Link to="iTzRusso10">Giuseppe Russo</Link>
      <Outlet />
    </div>
  );
};

export default GithubUserList;
