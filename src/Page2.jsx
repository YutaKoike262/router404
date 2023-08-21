import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <p>Page2</p>
      <Link to="/page2/100">URL PARAMeters</Link>
      <br />
      <Link to="/page2/100?name=hogehoge">query PARAMeters</Link>
    </div>
  );
};
