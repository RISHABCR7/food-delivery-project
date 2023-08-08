import { CAROUSEL_IMG_URL } from "../config.js";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div className="bg-black  h-94 flex pt-4 justify-between">

      <Link to=""> <img
          src={CAROUSEL_IMG_URL + "nbsluqgwsva4qo68dsoi"}
          className="w-80 h-64 mr-1 hover:w-72"
        /></Link>

      <Link to=""> <img
          src={CAROUSEL_IMG_URL + "zpkkdkmvlj5cuvqbc50t"}
          className="w-80 h-64 mr-1 hover:w-72"/></Link>
      
      <Link to=""><img
          src={CAROUSEL_IMG_URL + "fkdxvbwlciuvwpwgl92r"}
          className="w-80 h-64 mr-1 hover:w-72"
        /></Link>
     
      <Link to=""><img
          src={CAROUSEL_IMG_URL + "awurei8ypqkafoqay9ym"}
          className="w-80 h-64 mr-1 hover:w-72"
        /></Link>
      
      </div>
    </>
  );
};
export default Carousel;
