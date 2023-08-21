import { useLocation, useNavigate } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>HelloA</p>
      <button onClick={goBack}>戻る</button>
    </div>
  );
};
