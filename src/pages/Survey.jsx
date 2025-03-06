import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import "../styles/Survey.css"

function Survey() {
	const { questionNb } = useParams()
	let curQuestionNb = parseInt(questionNb, 10)
    let nextQuestionNb = curQuestionNb < 10 ? curQuestionNb + 1 : curQuestionNb
    let prevQuestionNb = curQuestionNb > 1 ? curQuestionNb - 1 : curQuestionNb

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
			<h2>Question number {questionNb} </h2>
			<div className="link-survey">
				<Link to={`/survey/${prevQuestionNb}`}>Precedent</Link> 
				{curQuestionNb === 10 ? (
					<Link to="/results">Resultats</Link>
				) : (
					<Link to={`/survey/${nextQuestionNb}`}>Suivant</Link>
				)}
			</div>
        </div>
    )
}

export default Survey