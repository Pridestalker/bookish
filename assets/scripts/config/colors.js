export const colors = {
	white: 'hsl(0, 100%, 100%)',
	black: 'hsl(0, 0%, 13%)',
	gray: 'hsl(0, 0%, 89%)',
	green: 'hsl(163, 67%, 48%)',
	red: 'hsl(357, 100%, 55%)',
	yellow: 'hsl(47, 100%, 68%)',
	purple: 'hsl(265, 83%, 45%)',
}

export const theme = {
	primary: colors.purple,
	secondary: colors.yellow,
}

export default {
	...colors,
	...theme
}
