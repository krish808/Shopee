import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  return (
    <div className="breadcrum">
      Home
      <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />
      {props.category} <img src={arrow_icon} alt="" />
      {props.name}
    </div>
  );
};

export default Breadcrum;
