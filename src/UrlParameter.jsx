import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <p>UrlParameterです {id}</p>
      <p>{query.get("name")}</p>
    </div>
  );
};
