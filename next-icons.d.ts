import React, { CSSProperties } from "react";

type Color = "currentColor" | string;

export interface IconProps {
	/**
	 * String that will be used as the `aria-label` attribute
	 *
	 * Default: "null"
	 * NOTE: Use an empty string when you already have readable text around the icon, like text inside a button!
	 */
	label?: string;

	/**
	 * Set the icon to filled style
	 *
	 * Default: "false"
	 */
	filled?: boolean;

	/**
	 *
	 * The primary color of the icon
	 *
	 * Default: "currentColor"
	 */
	primaryColor?: Color;

	/**
	 * The secondary color of the icon
	 *
	 * Default: "null"
	 */
	secondaryColor?: Color;

	/**
	 * The size of the icon
	 *
	 * Default: "md"
	 */
	size?: number | "sm" | "md" | "lg" | "xl";

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
	set?: "light" | "bold" | "two-tone" | "bulk" | "broken" | "curved";

	/**
	 * The stroke width of the icon
	 *
	 * Default: "regular"
	 */
	stroke?: "light" | "regular" | "bold";

	/**
	 * Your custom style property
	 */
	style?: CSSProperties;
}

export const NextIconsProvider: React.FC<IconProps>;

export const ArrowDown: React.FC<IconProps>;
export const ArrowDownSquare: React.FC<IconProps>;
export const ArrowLeft: React.FC<IconProps>;
export const ArrowLeftSquare: React.FC<IconProps>;
export const ArrowRight: React.FC<IconProps>;
export const ArrowRightSquare: React.FC<IconProps>;
export const ArrowUp: React.FC<IconProps>;
export const ArrowUpSquare: React.FC<IconProps>;
export const Activity: React.FC<IconProps>;
export const AddUser: React.FC<IconProps>;
export const Bag: React.FC<IconProps>;
export const Bag2: React.FC<IconProps>;
export const Bookmark: React.FC<IconProps>;
export const Buy: React.FC<IconProps>;
export const Calendar: React.FC<IconProps>;
export const Call: React.FC<IconProps>;
export const Calling: React.FC<IconProps>;
export const CallMissed: React.FC<IconProps>;
export const CallSilent: React.FC<IconProps>;
export const Camera: React.FC<IconProps>;
export const CaretDown: React.FC<IconProps>;
export const CaretLeft: React.FC<IconProps>;
export const CaretRight: React.FC<IconProps>;
export const CaretUp: React.FC<IconProps>;
