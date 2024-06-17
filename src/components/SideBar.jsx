
import React from "react"
export default function SideBar(props) {
    const {handleshowInfo,data}=props;
    return (
        <div className="sidebar">
            <div onClick={handleshowInfo} className="bgOverlay" >
            </div>
            <div  className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className="description">
                <p className="date">{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleshowInfo}>
            <i className="fa-solid fa-angles-right"></i>
            </button>
            </div>
        </div>
    )
}