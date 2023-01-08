import React from "react"
import Start from "./Start"

export default function Home() {

    const [category, setCategory] = React.useState("")

    const movies = "https://opentdb.com/api.php?amount=50&category=11&type=multiple";
    const computerScience = "https://opentdb.com/api.php?amount=50&category=18&type=multiple"
    const animals = "https://opentdb.com/api.php?amount=50&category=27&type=multiple"
    const history = "https://opentdb.com/api.php?amount=50&category=23&type=multiple"
    const dbs = "dbs" //local file
    const [numberQuestions, setNumberOfQuestions] = React.useState(3)

    React.useEffect(() => {
        localStorage.setItem("key", category)
    }, [category])

    React.useEffect(() =>{
        localStorage.setItem("numberQuestions", numberQuestions)
    },[numberQuestions])


    function handleChangeCategory(event) {
        const { value } = event.target
        setCategory(value)
    }

    function handleChangeNumber(event){
        const {value} = event.target
        setNumberOfQuestions(value)
    }

    return (
        <div className="home">
            <h1>TRIVIA</h1>
            <div >
                <form>
                    <div className="select-category-container">
                        <label htmlFor="select-category" className="select-category-title">Choose your Category</label>
                        <select className="select-category" value={category} onChange={handleChangeCategory}>
                            <optgroup label="Categories" className="category-options-container">
                                <option className="category-option" value={""} disabled hidden>-- Select a Category --</option>
                                <option className="category-option" value={movies}>Movies</option>
                                <option className="category-option" value={computerScience}>Computer Science</option>
                                <option className="category-option" value={animals}>Animals</option>
                                <option className="category-option" value={history}>History</option>
                                <option className="category-option" value={dbs}>Database Systems</option>
                            </optgroup>
                        </select>
                    </div>
                </form>
                <form>
                    <label htmlFor="question-number-input" className="select-category-title" style={{display : "block", margin : "auto"}}>How many Questions?</label>
                    <input type="number" defaultValue={numberQuestions} className="question-number-input" min="1" max="10" onChange={handleChangeNumber}  />
                </form>
            </div>
            <Start category={category}/>
            <div className="rules">
                <h2 className="rules-heading">Rules</h2>
                <ol>
                    <li className="rules-list">1. Choose a category</li>
                    <li className="rules-list">2. Choose the number of questions</li>
                    <li className="rules-list">3. Start the quiz</li>
                </ol>
                <p className="rules-text">
                 Answer wisely, as you can not not adjust after you clicked. 
                 When the quiz is finished you can save your results to History. In History you can observe the progress of your
                 wisdom. Select a category to start.</p>
            </div>
            
        </div>
    )
}