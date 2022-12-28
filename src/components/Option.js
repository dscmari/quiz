export default function Option(props){

    const option = props.option;
    const showAnswer = props.showAnswer
    const isCorrect = props.optionIsCorrect

    return(
        <div style= {{backgroundColor: showAnswer ? (isCorrect ? "#0bd711" : "#e26811") : "#001219"}}
         className="option" onClick={props.onClick}
        >
            <div className="option-index">{props.indexChar + ")"}</div>
            <div className="option-text" >{option.replace(/&quot;|&ldquo;|&rdquo;/g,'"' ).replace(/&rsquo;|&#039;|&rsquo;|&lrm;/g,"'").replace(/&shy;/g,"").replace(/&hellip;/g,"...")}</div>
        </div>
    )
}