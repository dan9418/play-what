const COLOR = {
	darkBlue: '#2C3D4C',
	lightBlue: '#2589BD',
	green: '#72B01D',
	orange: '#FF7F11',
	red: '#C50707',
	ivory: '#F6F7EB',
	// Neutral
	white: '#FFFFFF',
	light1: '#F3F4F8',
	light2: '#D2D4DA',
	light3: '#B3B5BD',
	medium1: '#9496A1',
	medium2: '#777986',
	medium3: '#5B5D6B',
	dark1: '#404252',
	dark2: '#282A3A',
	dark3: '#101223',
	black: '#000000',
	// Other
	transparent: 'transparent',
	transparentDark: 'rgba(0,0,0,0.1)',
	transparentLight: 'rgba(255,255,255,0.1)',
	gradient: 'linear-gradient(180deg, rgba(229,232,232,1) 0%, rgba(239,242,242,1) 31%, rgba(229,232,232,1) 100%)'
}

const THEME = {
	...COLOR,
	utils: {
		border: COLOR.light3,
		card: COLOR.white,
	},
	state: {
		active: COLOR.orange,
		interactive: COLOR.green,
		hoverDark: COLOR.transparentDark,
		hoverLight: COLOR.transparentLight
	},
	brand: {
		primary: COLOR.orange,
		secondary: COLOR.green,
		dark: COLOR.darkBlue,
		light: COLOR.light1
	},
	status: {
		positive: COLOR.green,
		warning: COLOR.orange,
		negative: COLOR.red,
		info: COLOR.lightBlue,
		highlight: COLOR.ivory
	}
}

export default THEME;
