import React from "react";
import { useNavigate } from "react-router-dom"; //클릭할때 어디로 넘어가라

const Card = ({ children }) => {
    const navigate=useNavigate();
      //console.log(props);

  return (
    <div className="card my-4" onClick={()=>{
      navigate('/blogs/edit')
      }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
