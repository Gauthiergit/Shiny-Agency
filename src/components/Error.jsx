import errorImg from '../assets/404.svg'
import styled from 'styled-components'

const StyledError = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
`

function Error() {
    return (
        <StyledError>
            <h1>Oups...</h1>
			<img src={errorImg} alt="erreur-404" />
			<h1>Il semblerait qu'il y ait un problème</h1>
        </StyledError>
    )
}
 
export default Error