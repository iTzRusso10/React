import { Link, Outlet } from "react-router-dom";

const GithubUserList = () => {
  return (
    <div>
      <Link to="mariowebcs">Mario D'andrea</Link>
      <Outlet />
    </div>
  );
};

export default GithubUserList;
