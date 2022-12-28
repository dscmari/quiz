

export default function Asking(props){

    const asking = props.asking;

    return(
        <div className="asking">
            <p className="question"> {asking.replace(/&quot;|&ldquo;|&rdquo;/g,'"' ).replace(/&rsquo;|&#039;|&rsquo;/g,"'").replace(/&shy;/g,"").replace(/&hellip;/g," ...").replace(/&amp;/g,"&")} </p>
        </div>
    )
}