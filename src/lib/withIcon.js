import React, { memo } from "react";
import PropTypes from "prop-types";

import { getSize, getThemeProp, getStroke, getOpacity } from "./utils";
import { NextIconsContext } from "./context";

function withIcon(Component) {
	class IconWrapper extends React.Component {
		static contextType = NextIconsContext;

		render() {
			const { primaryColor, secondaryColor, set, style, stroke, filled, label, size, ...restProps } = this.props;

			const theme = this.context;
			const iconSize = getSize(size) || getSize(getThemeProp("size", theme)) || "24px";
			const iconPrimaryColor = primaryColor || getThemeProp("primaryColor", theme) || "currentColor";
			const iconSecondaryColor = secondaryColor || getThemeProp("secondaryColor", theme) || iconPrimaryColor || "currentColor";

			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={iconSize}
					height={iconSize}
					viewBox="0 0 24 24"
					role={label ? "img" : "presentation"}
					aria-label={label || undefined}
					style={style}
					{...restProps}
				>
					<Component
						color={iconPrimaryColor}
						opacity={getOpacity(primaryColor, secondaryColor)}
						secondaryColor={iconSecondaryColor}
						set={filled ? "bold" : set || getThemeProp("set", theme) || "light"}
						strokeWidth={stroke ? getStroke(stroke) : getStroke(getThemeProp("stroke", theme)) || "1.5px"}
					/>
				</svg>
			);
		}
	}

	IconWrapper.propTypes = {
		/**
		 * String that will be used as the `aria-label` attribute
		 *
		 * Default: "null"
		 * NOTE: Use an empty string when you already have readable text around the icon, like text inside a button!
		 */
		label: PropTypes.string,

		/**
		 * Set the icon to filled style
		 *
		 * Default: "false"
		 */
		filled: PropTypes.bool,

		/**
		 *
		 * The primary color of the icon
		 *
		 * Default: "currentColor"
		 */
		primaryColor: PropTypes.string,

		/**
		 * The secondary color of the icon
		 *
		 * Default: "null"
		 */
		secondaryColor: PropTypes.string,

		/**
		 * The size of the icon
		 *
		 * Default: "md"
		 */
		size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["sm", "md", "lg", "xl"])]),

		/**
		 * Icon set options
		 *
		 * Default: "light"
		 *
		 * Options:
		 * - Bold
		 * - Bulk
		 * - Light | Border (default)
		 * - Light | Outline
		 * - Broken
		 * - Two Tone
		 * - Curved
		 */
		set: PropTypes.oneOf(["bold", "bulk", "light", "broken", "two-tone", "curved"]),

		/**
		 * The stroke width of the icon
		 *
		 * Default: "regular"
		 */
		stroke: PropTypes.oneOf(["light", "regular", "bold"]),

		/**
		 * Your custom style property
		 */
		style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
	};

	const MemoIcon = memo(IconWrapper);
	return MemoIcon;
}

export default withIcon;
