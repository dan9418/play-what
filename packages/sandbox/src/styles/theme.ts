const COLOR = {
	darkBlue: '#3C4953',
	lightBlue: '#2589BD',
	green: '#72B01D',
	orange: '#FF7F11',
	red: 'red',
	ivory: '#F6F7EB',
	// Neutral
	white: '#FFF',
	light: '#ECEFEF',
	mediumLight: '#DEE3E3',
	medium: '#949E9E',
	mediumDark: '#4A5959',
	dark: '#2C3D4C',
	black: '#000'
}

const THEME = {
	temp: COLOR.black,
	primary: COLOR.darkBlue,
	clickable: COLOR.green,
	active: COLOR.orange,
	border: '#ccc',
	status: {
		postive: COLOR.green,
		negative: COLOR.red,
		warning: COLOR.orange,
		info: COLOR.lightBlue
	},
	surface: {
		bg: COLOR.light,
		highlight: COLOR.mediumLight,
		nav: COLOR.dark,
		gradient: 'linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%)'
	},
	text: {
		dark: COLOR.dark,
		mediumDark: COLOR.mediumDark,
		medium: COLOR.medium,
		mediumLight: COLOR.mediumLight,
		light: COLOR.medium
	}
}

export default THEME;
