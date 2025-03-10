import DefaultPicture from '../assets/avatar_5.png'
import Card from '../components/Card'
import styled from 'styled-components'

function Freelances() {
	const freelanceProfiles = [
		{
			name: 'Jane Doe',
			jobTitle: 'Devops',
			picture: DefaultPicture,
		},
		{
			name: 'John Doe',
			jobTitle: 'Developpeur frontend',
			picture: DefaultPicture,
		},
		{
			name: 'Jeanne Biche',
			jobTitle: 'Développeuse Fullstack',
			picture: DefaultPicture,
		},
	]

	const CardsContainer = styled.div`
		display: grid;
		gap: 24px;
		grid-template-rows: 350px 350px;
		grid-template-columns: repeat(2, 1fr);
	`

	const StyledProfile = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
	`

	return (
		<StyledProfile>
			<h1>Trouvez vore prestataire</h1>
			<p>Chez Shiny, nous réunnissons les meilleurs profls pour vous</p>
			<CardsContainer>
				{freelanceProfiles.map((profil, index) => (
					<Card
						key={`${profil.name}-${index}`}
						label={profil.jobTitle}
						title={profil.name}
						picture={profil.picture}
					/>
				))}
			</CardsContainer>
		</StyledProfile>
	)
}

export default Freelances;