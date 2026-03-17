import React, { forwardRef, SVGAttributes } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const HOUR_HAND_VARIANTS: Variants = {
	idle: {
		rotate: 0,
		transition: { duration: 0.2, ease: "easeOut" }
	},
	active: {
		rotate: 360,
		transition: { duration: 24, ease: "linear", repeat: Number.POSITIVE_INFINITY }
	}
};

const MINUTE_HAND_VARIANTS: Variants = {
	idle: {
		rotate: 0,
		transition: { duration: 0.2, ease: "easeOut" }
	},
	active: {
		rotate: 360,
		transition: { duration: 6, ease: "linear", repeat: Number.POSITIVE_INFINITY }
	}
};

const Clock = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, onMouseEnter, onMouseLeave, onFocus, onBlur, ...rest }, ref) => {
		const [isActive, setIsActive] = React.useState(false);

		const handleMouseEnter = (e: React.MouseEvent<SVGSVGElement>) => {
			setIsActive(true);
			onMouseEnter?.(e);
		};

		const handleMouseLeave = (e: React.MouseEvent<SVGSVGElement>) => {
			setIsActive(false);
			onMouseLeave?.(e);
		};

		const handleFocus = (e: React.FocusEvent<SVGSVGElement>) => {
			setIsActive(true);
			onFocus?.(e);
		};

		const handleBlur = (e: React.FocusEvent<SVGSVGElement>) => {
			setIsActive(false);
			onBlur?.(e);
		};

		return (
			<svg
				ref={ref}
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...rest}
			>
				<circle cx="12" cy="12" r="10" />
				<motion.line
					x1="12"
					y1="12"
					x2="12"
					y2="6"
					initial="idle"
					animate={isActive ? "active" : "idle"}
					variants={HOUR_HAND_VARIANTS}
					style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
				/>
				<motion.line
					x1="12"
					y1="12"
					x2="16"
					y2="14"
					initial="idle"
					animate={isActive ? "active" : "idle"}
					variants={MINUTE_HAND_VARIANTS}
					style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
				/>
			</svg>
		);
	}
);

Clock.displayName = "Clock";
export default Clock;
