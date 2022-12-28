export default function Counter(props){
    return(
        <div className="counter-quiz">
            <h2>Question {props.questionCounter}/ {props.numberQuestions} </h2>
            <h2>Points {props.pointCounter} </h2>
        </div>
    )
}