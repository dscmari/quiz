import { Link } from "react-router-dom"

export default function Start(props){
    
    return(
        <div className="start">
            {props.category === "" ? "" : <button className="home-start-quiz-btn">
               <Link className="home-start-quiz-link" to="/quiz">Go to Quiz</Link>   
            </button>}
            
        </div>
    )
}