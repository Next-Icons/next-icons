import React, { forwardRef, SVGAttributes } from "react";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const FRAME_VARIANTS: Variants = {
	idle: {
		rotate: 0,
		x: 0,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.28,
			ease: "easeOut"
		}
	},
	active: {
		rotate: [0, -1.1, 1.1, -0.7, 0.7, 0],
		x: [0, -0.25, 0.25, -0.15, 0.15, 0],
		y: [0, -0.15, 0.05, -0.1, 0],
		scale: [1, 1.015, 1],
		transition: {
			duration: 0.8,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_LEFT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, -8, -4, -7, -3, 0],
		y: [0, -0.3, -0.1, -0.25, 0],
		transition: {
			duration: 0.56,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_RIGHT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, 8, 4, 7, 3, 0],
		y: [0, -0.3, -0.1, -0.25, 0],
		transition: {
			duration: 0.56,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const CHECK_VARIANTS: Variants = {
	idle: {
		pathLength: 1,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut"
		}
	},
	active: {
		pathLength: [0.25, 1, 1],
		opacity: [0.65, 1, 1],
		scale: [0.96, 1.04, 1],
		transition: {
			duration: 0.7,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const AlarmCheck = forwardRef<SVGSVGElement, IconProps>(
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
				<motion.g
					initial="idle"
					animate={isActive ? "active" : "idle"}
					variants={FRAME_VARIANTS}
					style={{ transformOrigin: "12px 13px" }}
				>
					<circle cx="12" cy="13" r="8" />
					<motion.path d="M5 3 2 6" variants={BELL_LEFT_VARIANTS} style={{ transformOrigin: "5px 3px" }} />
					<motion.path d="m22 6-3-3" variants={BELL_RIGHT_VARIANTS} style={{ transformOrigin: "19px 3px" }} />
					<path d="M6.38 18.7 4 21" />
					<path d="M17.64 18.67 20 21" />
					<motion.path d="m9 13 2 2 4-4" variants={CHECK_VARIANTS} style={{ transformOrigin: "11px 13px" }} />
				</motion.g>
			</svg>
		);
	}
);

AlarmCheck.displayName = "AlarmCheck";
export default AlarmCheck;
