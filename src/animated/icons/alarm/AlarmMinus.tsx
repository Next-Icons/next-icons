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
			duration: 0.25,
			ease: "easeOut"
		}
	},
	active: {
		rotate: [0, -0.9, 0.9, -0.6, 0.6, 0],
		x: [0, -0.2, 0.2, -0.15, 0.15, 0],
		y: [0, -0.12, 0.05, -0.08, 0],
		scale: [1, 1.012, 1],
		transition: {
			duration: 0.78,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_LEFT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, -7, -4, -6, -3, 0],
		y: [0, -0.28, -0.1, -0.2, 0],
		transition: {
			duration: 0.54,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_RIGHT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, 7, 4, 6, 3, 0],
		y: [0, -0.28, -0.1, -0.2, 0],
		transition: {
			duration: 0.54,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const MINUS_VARIANTS: Variants = {
	idle: {
		scaleX: 1,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut"
		}
	},
	active: {
		scaleX: [1, 0.72, 1, 0.82, 1],
		opacity: [1, 0.62, 1, 0.78, 1],
		transition: {
			duration: 0.86,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const AlarmMinus = forwardRef<SVGSVGElement, IconProps>(
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
					<motion.path d="M9 13h6" variants={MINUS_VARIANTS} style={{ transformOrigin: "12px 13px" }} />
				</motion.g>
			</svg>
		);
	}
);

AlarmMinus.displayName = "AlarmMinus";
export default AlarmMinus;
