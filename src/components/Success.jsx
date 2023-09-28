import React from "react";
import { ReactComponent as SucIcon } from "../icon-success.svg";

function Success() {
    const inputValue = document.getElementById("emailInput").value;
    return <div className="successContainer">
        <div className="successDiv">
            <SucIcon className="sucIcon" />
            <h1 className="sucHeader">Thanks for subscribing!</h1><p className="sucP">A confirmation email has been sent to <strong>{inputValue}</strong>.Please open it and click the button inside to confirm your subscription.</p>
            <button className="secondBtn">Dismiss message</button>
        </div></div>


}

export default Success;