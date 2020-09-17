import color from 'color';

const getFgColor = (bg) => {
	if (!bg) return "#000";
	return color(bg).isDark() ? "#000" : "#fff";
};

const getStylesFromBgColor = (bg) => {
	const fg = getFgColor(bg);
	return {
		backgroundColor: bg,
		color: fg
	}
};

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
	getStylesFromBgColor
};
