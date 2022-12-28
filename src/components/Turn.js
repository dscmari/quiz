
export default function Turn(props){

    const percentage =Math.round(((props.rightAnswers / props.questions) * 100) * 10) / 10 

    return(
        <div className="turn">
            <table className="turn-table">
                <tbody>
                    <tr>
                        <td className="table-category">{props.category}</td>
                        <td className="table-results">{props.rightAnswers} / {props.questions}</td>
                        <td className="table-percentage">{percentage}</td>
                    </tr>
                </tbody>               
            </table>           
        </div>
    )
}