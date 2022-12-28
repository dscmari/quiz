import Turn from "./Turn"
import { Link } from "react-router-dom"

export default function History() {


    let history = JSON.parse(localStorage.getItem("history"))
    let turns


    if(history !== null){
        turns = history.map(turn => {
            return (
                <Turn
                    key={history.indexOf(turn)}
                    category={turn.category}
                    questions={turn.questions}
                    rightAnswers={turn.rightAnswers}
                    wrongAnswers={turn.wrongAnswers}
    
                />
            )
        })
    }
    


    function deleteHistory() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="history">
            <h1>History</h1>
            
            <div className="history-table">
                <table className="history-table-heading">
                    <tbody>
                        <tr>
                            <th className="table-category">Category</th>
                            <th className="table-results">Results</th>
                            <th className="table-percentage">%</th>
                        </tr>
                    </tbody>                   
                </table>
                <div className="history-table-turns">
                    {history === null ? <p style={{textAlign: "center", padding : 30}}>There is no History yet</p> : <div>{turns}</div>}
                </div>
            </div>
             <button className="history-new-game-btn" > <Link className="link-home-btn" to="/">New Game</Link></button>
             <button className="delete-history-btn" onClick={deleteHistory} >Delete History</button>
        </div>
    )
}