import React from "react"

export default function Footer(props) {
  const{handleshowInfo,data}=props;
  return (
    <footer>  
      <div onClick={handleshowInfo} className="bgGradient"></div>  
        <div>
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
        </div>
        <button onClick={handleshowInfo}>
        <i className="fa-solid fa-circle-info"></i>
        </button>
    
    </footer>

  )
}
