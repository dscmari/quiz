export default function Answer(props){

    const answer = props.correctAnswer;

    return(
        <div className="answer">
            <h2> {String.fromCharCode(props.indexChar + 65) + ")"} </h2>
            <h2> {answer.replace(/&quot;|&ldquo;/g,'"' ).replace(/&rsquo;|&#039;|&rsquo;/g,"'").replace(/&shy;/g,"")} </h2>
        </div>
    )
}