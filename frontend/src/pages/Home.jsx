import styled from 'styled-components'
import { StyledLink } from '../utils/styles/Atoms';
import homeImg from '../assets/home-illustration.svg'
import colors from '../utils/styles/Colors';


const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const HomerContainer = styled.div`
	margin: 30px;
	background-color: ${colors.backgroundLight};
	padding: 60px 90px;
	display: flex;
	flex-direction: row;
	max-width: 1200px;
`

const LeftCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	${StyledLink} {
		max-width: 250px;
	}
`

const StyledTitle = styled.h2`
	padding-bottom: 30px;
	max-width: 280px;
	line-height: 50px;
`

const Illustration = styled.img`
	flex: 1;
`

function Home() {
	return (
		<HomeWrapper>
			<HomerContainer>
				<LeftCol>
					<StyledTitle>
						Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
					</StyledTitle>
					<StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
				</LeftCol>
				<Illustration src={homeImg} />
			</HomerContainer>
		</HomeWrapper>
	)
}

export default Home;
