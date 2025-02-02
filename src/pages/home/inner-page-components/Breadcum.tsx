import { Link } from "react-router-dom";
type TBreadcum = {
  title: string;
  breadcrumbs: string;
};
const Breadcum = ({ title, breadcrumbs }: TBreadcum) => {
  return (
    <div className="breadcum-area">
      <div className="container">
        <div className="breadcum-content-wrap">
          <h2 className="breadcum-title">{title}</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{breadcrumbs}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcum;
