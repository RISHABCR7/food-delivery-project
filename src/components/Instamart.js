import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border border-black m-2">
        <h1 className="text-2xl font-bold p-2 m-2">{title}</h1>
        {isVisible ? (
          <button className="btn" onClick={() => setIsVisible(false)}>
            <b className="p-4">Hide</b>
          </button>
        ) : (
          <button onClick={() => setIsVisible(true)}><b className="p-4 text-gray-500">Show</b></button>
        )}
        {isVisible && <h2 className=" p-2 m-3">{description}</h2>}
      </div>
    </>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        title={"About Instamart"}
        description={
          <div className="flex">
            <div className="p-2 m-2">
            <img  src="https://res.cloudinary.com/Swiggy/image/upload/fl_lossy,f_auto,q_auto,h_160/InstamartMicrosite/RCB1"/>
            </div>
            <div className="p-2 m-2">
            
             <div className="m-8">
                <b>
                 "Groceries delivered in minutes </b>,just as fast as we deliver food!"
             </div>
             <div className="m-8">
                <b >"Open 6 AM to late night everyday,</b>from your morning coffee needs to snacks for your late night binge.
             </div>

             <div className="font-bold p-7 m-2">
             <h1 >Download Food Store </h1>

             <h1 >order now on Instamart!</h1>

             

             



              </div>
              <div className="font-bold">
                
                 
                <h1 className="p-8 bg-cyan-100">❤️ Trusted by millions of shoppers in Bangalore, Delhi-NCR, Hyderabad, Mumbai, Chennai, Pune & other cities</h1>
               
                </div>
            </div>
          
         
          </div>
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "about" ? "hide" : "about")
        }
      />

      <Section
        title={"Products"}
        description={
           "We have variety of products for daily uses like fruits vegetables and we try to deliver them at your door step at the minimum time possible."
            
        }
        isVisible={visibleSection === "products"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "products" ? "hide" : "products")
        }
      />

      <Section
        title={"Careers"}
        description={
          "We are hiring NOW! Hurry UP"
        }
        isVisible={visibleSection === "Careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection == "Careers" ? "hide" : "Careers")
        }
      />
    </>
  );
};

export default InstaMart;
