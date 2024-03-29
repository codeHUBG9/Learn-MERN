import className from "classnames";
const Button = ({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	rounded,
	outline,
	...rest
}) => {
	const classes = className(
		rest.className,
		"flex items-center  px-3 py-1.5 border",
		{
			"border-blue-600 bg-blue-500 text-white": primary,
			"border-gray-900 bg-gray-800 text-white": secondary,
			"border-green-500 bg-green-500 text-white": success,
			"border-yellow-400 bg-yellow-400 text-white": warning,
			"border-red-500 bg-red-500 text-white": danger,
			"rounded-full": rounded,
			"bg-white": outline,
			"text-gray-900": outline && primary,
			"text-gray-600": outline && secondary,
			"text-green-600": outline && success,
			"text-yellow-900": outline && warning,
			"text-red-900": outline && danger,
		}
	);

	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
};

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if (count > 1) {
			return new Error(
				"Only one of primary, secondary, success, warning, danger can be true"
			);
		}
	},
};
export default Button;
