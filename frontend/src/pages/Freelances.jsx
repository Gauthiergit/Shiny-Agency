// import DefaultPicture from '../assets/avatar_5.png'
import Card from '../components/Card'
import styled from 'styled-components'
import colors from '../utils/styles/Colors'
import { Loader } from '../utils/styles/Atoms'
import { useFetch, useTheme } from '../utils/Hooks'
import { Link } from 'react-router-dom'

const CardsContainer = styled.div`
	display: grid;
	gap: 24px;
	grid-template-rows: 350px 350px;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-items: center;
`

const PageTitle = styled.h1`
	font-size: 30px;
	color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
	text-align: center;
	padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
	font-size: 20px;
	color: ${colors.secondary};
	font-weight: 300;
	text-align: center;
	padding-bottom: 30px;
	color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
`

function Freelances() {
	const { theme } = useTheme()
	// const [isDataLoading, setDataLoading] = useState(false)
	// const [error, setError] = useState(false)
	// const [freelancersList, setFreelancesList] = useState([])
	const {data, isLoading, error} = useFetch(`http://localhost:8000/freelances`)
	const {freelancersList} = data
  
	// useEffect(() => {
	//   async function fetchFreelances() {
	// 	setDataLoading(true)
	// 	try {
	// 	  const response = await fetch(`http://localhost:8000/freelances`)
	// 	  const { freelancersList } = await response.json()
	// 	  setFreelancesList(freelancersList)
	// 	} catch (err) {
	// 	  console.log('===== error =====', err)
	// 	  setError(true)
	// 	} finally {
	// 	  setDataLoading(false)
	// 	}
	//   }
	//   fetchFreelances()
	// }, [])
  
	if (error) {
		return <span>Oups il y a eu un problème</span>
	}
  
	return (
		<div>
			<PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
			<PageSubtitle theme={theme}>
				Chez Shiny nous réunissons les meilleurs profils pour vous.
			</PageSubtitle>
			{isLoading ? (
				<LoaderWrapper>
					<Loader theme={theme} data-testid="loader"/>
				</LoaderWrapper>
			) : (
				<CardsContainer>
					{freelancersList && freelancersList.map((profile, index) => (
						<Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
							<Card
								key={`${profile.name}-${index}`}
								theme={theme}
								label={profile.job}
								title={profile.name}
								picture={profile.picture}
							/>
						</Link>
					))}
				</CardsContainer>
			)}
		</div>
	)
}

export default Freelances;