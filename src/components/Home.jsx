import { ReactComponent as Logo } from "../illustration-sign-up-desktop.svg";
import { ReactComponent as Icon } from "../icon-list.svg";
import Form from "./Form";
import "../style.css";


function Home() {


    return <div className="flex-container">
        <div className="container">
            <div className="firstDiv"><header> <h1>Stay updated!</h1></header>

                <p className="listP"> Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="list">
                    <p><Icon className="icon" />  Product discovery and building what matters</p>
                    <p><Icon className="icon" />  Measuring to ensure updates are a success</p>
                    <p> <Icon className="icon" />  And much more!</p>
                </div>
                <Form />
            </div>

            <div>
                <Logo className="img" />
            </div>
        </div>



    </div>
}

export default Home;