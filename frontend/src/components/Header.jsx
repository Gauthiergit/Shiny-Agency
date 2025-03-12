import { StyledLink } from '../utils/styles/Atoms'
import styled from 'styled-components'
import logo from '../assets/dark-logo.png'


const StyleHeader = styled.div`
		display: flex;
		justify-content: space-between;
		padding-top: 20px;
		align-items: center;
`

function Header() {
    return (
		<StyleHeader>
			<img src={logo} alt="shiny-agency" />
			<nav>
				<StyledLink to="/">Accueil</StyledLink>
				<StyledLink to="/freelances">Profils</StyledLink>
				<StyledLink to="/survey/1" $isFullLink>
					Faire le test
				</StyledLink>
			</nav>
		</StyleHeader>
    )
}

export default Header