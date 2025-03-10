import '../styles/Home.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/styles/Colors'
import homeImg from '../assets/home-illustration.svg'

const StyledLink = styled(Link)`
	padding: 15px;
	color: white;
	text-decoration: none;
	font-size: 20px;
	border-radius: 30px;
	background-color: ${colors.primary}
`

const StyledHome = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 60px;
	align-items: center;
	padding-bottom: 20px;
`

const StyledText = styled.p`
	font-size: 50px;
	font-weight: bold;
	color: rgb(41, 41, 41);
`

function Home() {
	return (
		<StyledHome>
			<div>
				<StyledText>Repérez vos besoins,<br/>on s'occupe du reste,<br/>avec les meilleurs talents</StyledText>
				<StyledLink to="/survey/1">Faire le test</StyledLink>
			</div>
			<img src={homeImg} alt="home-img" />
		</StyledHome>
	)
}

export default Home;
