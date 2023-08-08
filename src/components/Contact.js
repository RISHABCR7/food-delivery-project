import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
    <div className="flex-col ">
    {<h1 className="font-bold  p-3 m-2 text-xl text-center" >CONTACT US </h1>}
    <div className=" p-3 m-1">
    <Link className=" font-bold p-3 m-2 " to="">Send Email - reconciliation07@gmail.com</Link> 
    </div>
    <div className=" p-3 m-1">
      <Link className="font-bold  p-3 m-2" to=""> Instagram  - _reconciliation_cr7_</Link>
    </div>
    <div className=" p-3 m-1">
      <Link className="font-bold  p-3 m-2" to=""> Tweet - reconciliation@twiter.com</Link>
    </div>
    <div className=" p-3 m-1">
    <Link className="font-bold p-3 m-2" to=""> Call Us Now @ 1800-956-893 </Link>
    </div>
    </div>
    </>
  )
    
};

export default Contact;
