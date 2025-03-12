import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/styles/Colors'
import { useContext } from 'react'
import { Loader } from '../utils/styles/Atoms'
import { SurveyContext } from "../utils/Context"
import { useFetch } from "../utils/Hooks"

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
	border: none;
	height: 100px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.backgroundLight};
	border-radius: 30px;
	cursor: pointer;
	box-shadow: ${(props) =>
		props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
	&:first-child {
		margin-right: 15px;
	}
	&:last-of-type {
		margin-left: 15px;
	}
`

const ReplyWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

function Survey() {
	const { questionNb } = useParams()
	let curQuestionNb = parseInt(questionNb)
    let nextQuestionNb = curQuestionNb < 10 ? curQuestionNb + 1 : curQuestionNb
    let prevQuestionNb = curQuestionNb > 1 ? curQuestionNb - 1 : curQuestionNb

	// const [surveyData, setSurveyData] = useState({})
	const {data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
	const {surveyData} = data

	// const [isDataLoading, setDataLoading] = useState(false)
	// const [error, setError] = useState(false)
	const { answers, saveAnswers } = useContext(SurveyContext)

	function saveReply(answer) {
		saveAnswers({ [questionNb]: answer })
	}

	// useEffect(() => {
	// 	setDataLoading(true)
	// 	fetch(`http://localhost:8000/survey`)
	// 		.then((response) => response.json().then(({ surveyData }) => {
	// 			setSurveyData(surveyData)
	// 			setDataLoading(false)
	// 		})
	// 	)
	// }, [])

	// useEffect(() => {
	// 	async function fetchSurvey(){
	// 		setDataLoading(true)
	// 		try {
	// 			const response = await fetch(`http://localhost:8000/survey`)
	// 			const { surveyData }  = await response.json()
	// 			setSurveyData(surveyData)
	// 		} catch (error) {
	// 			console.log(error)
	// 			setError(true)
	// 		}
	// 		finally {
	// 			setDataLoading(false)
	// 		}
	// 	}
	// 	fetchSurvey()
	// }, [])

	if (error)
		return (<span>Oups il y a eu un problème</span>)

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNb}</QuestionTitle>
			{isLoading ? (
				<Loader />
			) : (
				<QuestionContent>{surveyData && surveyData[questionNb]}</QuestionContent>
			)}
			{answers && (
				<ReplyWrapper>
					<ReplyBox
						onClick={() => saveReply(true)}
						isSelected={answers[questionNb] === true}
					>
						Oui
					</ReplyBox>
					<ReplyBox
						onClick={() => saveReply(false)}
						isSelected={answers[questionNb] === false}
					>
						Non
					</ReplyBox>
				</ReplyWrapper>
			)}
			<LinkWrapper>
				<Link to={`/survey/${prevQuestionNb}`}>Precedent</Link> 
				{surveyData && surveyData[curQuestionNb + 1] ? (
					<Link to={`/survey/${nextQuestionNb}`}>Suivant</Link>
				) : (
					<Link to="/results">Resultats</Link>
				)}
			</LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey