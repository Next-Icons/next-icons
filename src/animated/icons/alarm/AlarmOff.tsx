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
		transition: {
			duration: 0.24,
			ease: "easeOut"
		}
	},
	active: {
		rotate: [0, -0.45, 0.45, -0.3, 0.3, 0],
		x: [0, -0.12, 0.12, -0.08, 0.08, 0],
		y: [0, -0.08, 0.03, -0.05, 0],
		transition: {
			duration: 0.9,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_LEFT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, -4.5, -2.5, -4, -2, 0],
		y: [0, -0.14, -0.05, -0.1, 0],
		transition: {
			duration: 0.65,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const BELL_RIGHT_VARIANTS: Variants = {
	idle: { rotate: 0, y: 0 },
	active: {
		rotate: [0, 4.5, 2.5, 4, 2, 0],
		y: [0, -0.14, -0.05, -0.1, 0],
		transition: {
			duration: 0.65,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const SLASH_VARIANTS: Variants = {
	idle: {
		pathLength: 1,
		pathOffset: 0,
		x: 0,
		y: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut"
		}
	},
	active: {
		pathLength: [0, 1, 1],
		pathOffset: [1, 0, 0],
		x: [-0.7, 0, 0],
		y: [-0.7, 0, 0],
		transition: {
			duration: 1,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY,
			repeatDelay: 0.2
		}
	}
};

const AlarmOff = forwardRef<SVGSVGElement, IconProps>(
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
					<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
					<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
					<motion.path d="m22 6-3-3" variants={BELL_RIGHT_VARIANTS} style={{ transformOrigin: "19px 3px" }} />
					<path d="M6.26 18.67 4 21" />
					<motion.path d="m2 2 20 20" variants={SLASH_VARIANTS} style={{ transformOrigin: "12px 12px" }} />
					<motion.path d="M4 4 2 6" variants={BELL_LEFT_VARIANTS} style={{ transformOrigin: "4px 4px" }} />
				</motion.g>
			</svg>
		);
	}
);

AlarmOff.displayName = "AlarmOff";
export default AlarmOff;
