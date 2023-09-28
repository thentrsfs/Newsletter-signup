
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../style.css";

function Form() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }



    const handleChange = event => {
        setEmail(event.target.value);
    }
    const navigate = useNavigate();
    const navigateToSuccess = (event) => {
        event.preventDefault();
        if (isValidEmail(email)) {
            navigate("/success");
        } else {
            setError("Valid email required");
        }
    };




    return <form onSubmit={navigateToSuccess}>
        <label htmlFor="email"><span className="emailLabel">Email address </span><span className="errorMsg">{error}</span></label>
        <br />
        <input className={error && "errorInput"} onChange={handleChange} id="emailInput" name="emailInput" type="text" placeholder="email@company.com" value={email} />
        <button type="submit" className="firstBtn">Subscribe to monthly newsletter</button>
    </form>

}

export default Form;