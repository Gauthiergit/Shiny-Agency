import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/styles/Colors'
import logo from '../assets/dark-logo.png'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 20px;
	position: relative;
    ${(props) =>
        props.$isFullLink &&
        `color: white;
		border-radius: 30px;
		background-color: ${colors.primary}`
	}
`

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