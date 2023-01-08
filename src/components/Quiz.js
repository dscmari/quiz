import React from "react"
import Asking from "./Asking"
import Option from "./Option"
import Counter from "./Counter"

export default function Quiz() {

    const category = window.localStorage.getItem("key") //get api link respective to category that was chosen
    const numberQuestions = JSON.parse(localStorage.getItem("numberQuestions"))

    const [allQuestions, setAllQuestions] = React.useState([]) //fetch data

    React.useEffect(() => {
        if(category === "dbs"){
            fetch('database_systems_questions.json')
            .then(res => res.json())
            .then(data => setAllQuestions(data))

        }
        else{
            fetch(category)
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
        }
        
    },[category])

    //random index is set only after allQuestionsArray is filled -> index 0 problem solved
    React.useEffect(() => {
        setIndex(Math.floor(Math.random() * allQuestions.length))
    }, [allQuestions])

   
    const [index, setIndex] = React.useState(0)
    const [asking, setAsking] = React.useState("")
    const [correctAnswer, setCorrectAnswer] = React.useState("")
    const [showAnswer, setShowAnswer] = React.useState(false)
    const [options, setOptions] = React.useState([])
    const [questionCounter, setQuestionCounter] = React.useState(0)
    const [pointCounter, setPointCounter] = React.useState(0)
    const [isClicked, setIsClicked] = React.useState(true)
    const [pointIsAdded, setPointIsAdded] = React.useState(false) //answer is true
    const [isSaved, setIsSaved] = React.useState(false)

    function startQuestion() {
        console.log('index '+index)
        console.log('length '+allQuestions.length)
        incrementQuestionCounter()
        setIsClicked(false)
        setPointIsAdded(false)
        setIsSaved(false)

        setAsking(allQuestions[index].question)
        setCorrectAnswer(allQuestions[index].correct_answer)

        const tempIncorrectAnswers = allQuestions[index].incorrect_answers
        const tempCorrectAnswer = allQuestions[index].correct_answer
        setOptions([...tempIncorrectAnswers, tempCorrectAnswer])
        setOptions(prevOptions => (prevOptions.sort((a, b) => 0.5 - Math.random())))
        setShowAnswer(false)
    }

    function getAnswer(option) {
        setIsClicked(true)
        setShowAnswer(true)
        setIndex((Math.floor(Math.random() * allQuestions.length)))

        if (option === correctAnswer && isClicked === false) {
            incrementPointCounter()
            showAddedPoint()
            questionAnsweredCorrect()
        }
    }

    //called when question is answered correctly
    function questionAnsweredCorrect(){
        setAllQuestions(allQuestions.filter(question => allQuestions.indexOf(question) !== index)) // filter right answer out of the questions so it doesnt get asked again
        setIndex(Math.floor(Math.random() * (allQuestions.length - 1))) //highest index is undefined because of reducing array size
    }

    function showAddedPoint() {
        setPointIsAdded(true)
    }

    function incrementPointCounter() {
        setPointCounter(prevCount => prevCount + 1)
    }

    function incrementQuestionCounter() {
        setQuestionCounter(prevCount => prevCount + 1)
    }

    function restart(){
        window.location.reload(false)
    }

    function saveHistory(){
        
        if(isSaved === false){
            const turn = {
                category : allQuestions[0].category,
                questions: questionCounter - 1,
                rightAnswers: pointCounter,
                wrongAnswers: questionCounter- 1 - pointCounter
            }
            const firstTurnInHistory = [turn]
            if(localStorage.getItem("history") === null){
                localStorage.setItem("history", JSON.stringify(firstTurnInHistory))
            }
            else{
                let history =JSON.parse(localStorage.getItem("history"))
                const currentHistory = [...history, turn]
                localStorage.setItem("history", JSON.stringify(currentHistory))
            }
            setIsSaved(true)
        }

        
        

    }

    const optionsTemp = options.map(option => {
        return (
            <Option
                onClick={() => getAnswer(option)}
                key={options.indexOf(option)}
                option={option}
                optionIsCorrect={option === correctAnswer}
                indexChar={String.fromCharCode(options.indexOf(option) + 65)}
                showAnswer={showAnswer}
            />
        )
    })

    return (
        
        <div className="quiz">
           
            {questionCounter < numberQuestions +1 ?
                <div className="quiz-container">
                    <Counter questionCounter = {questionCounter} pointCounter={pointCounter} numberQuestions = {numberQuestions}  />
                    <div> {pointIsAdded ? <div className="quiz-add-point">Correct!</div> : ""}</div>
                    {isClicked ? <button className="quiz-new-question-btn" onClick={startQuestion}>{questionCounter === 0 ? "Start" : (questionCounter === numberQuestions ? "Show Results" : "Next" )}</button> : ""}
                    
                    <div className="quiz-asking"><Asking asking={asking} /></div>
                    <div className="quiz-options-container" >{optionsTemp}</div>
                    {console.log(allQuestions.length)}
                    {allQuestions.length === 0 ? <div><p className="quiz-waiting-message">Please wait. Your questions are loading.</p><div className="loader"></div></div> : ""}
                </div>
                
                :
                <div className="game-over-container">
                    <Counter questionCounter = {(questionCounter - 1)} pointCounter={pointCounter} numberQuestions={numberQuestions} />
                    <h1 className="quiz-completed-header">Quiz completed</h1>
                    <p className="result">You scored {pointCounter} / {questionCounter -1} points</p>
                    <button className="save-history-btn" onClick={saveHistory}>Save to History</button>
                    <button className="quiz-restart-btn" onClick={restart}>Restart</button>
                    {isSaved ? <p style={{padding : 20}}>Quiz Results are saved to History</p> : "" }
                </div>
            }
        </div>
    )
}