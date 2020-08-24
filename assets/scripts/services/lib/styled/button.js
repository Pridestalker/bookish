import styled, { withTheme } from 'styled-components';
import { getThemeColor } from '../../../config';

const Button = styled.button`
	border: 1px solid ${props => getThemeColor(props.theme.background, props.defaults.background)};
	background: ${props => getThemeColor(props.theme.background, props.defaults.background)};
	color: ${props => getThemeColor(props.theme.color, props.defaults.color)};
	padding: .5rem;
	margin: 1rem 0;
	display: block;
	border-radius: ${props => props.theme.borderRadius?? props.defaults.borderRadius};
`;

Button.defaultProps = {
	theme: {
		background: 'primary',
		color: 'white',
		borderRadius: '4px',
	},
	defaults: {
		background: 'primary',
		color: 'white',
		borderRadius: '4px',
	}
}

export const StyledButton = withTheme(Button);
export default StyledButton;
