import color from 'color';
import Degree from './Degree';
import Pitch from './Pitch';

const getFgColor = (bg) => {
	if (!bg) return "#000";
	return color(bg).isDark() ? "#fff" : "#000";
};

const getStylesFromBgColor = (bg) => {
	if (!bg) return {};
	const fg = getFgColor(bg);
	return {
		backgroundColor: bg,
		color: fg
	}
};

const getColor = (value, podType) => {
	if (!value) return null;
	if (podType === 'pod')
		return Pitch.getColor(value[0]);
	return Degree.getColor(value[1]);
}

/* const getColorFromContinuousScheme = (value, min, max, scheme) => {
  let percent = (value - min) / (max - min);
  percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

  const initialColor = color(scheme.min);
  const finalColor = color(scheme.max);
  const background = initialColor.mix(finalColor, percent);

  return background;
}; */

export default {
	getFgColor,
	getStylesFromBgColor,
	getColor
};
