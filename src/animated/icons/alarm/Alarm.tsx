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
		x: 0,
		y: 0,
		rotate: 0,
		transition: {
			duration: 0.25,
			type: "spring",
			stiffness: 220,
			damping: 24
		}
	},
	active: {
		x: [0, -0.5, 0.5, -0.35, 0.35, -0.2, 0.2, 0],
		y: [0, -0.15, 0.15, -0.1, 0.1, 0],
		rotate: [0, -1.2, 1.2, -0.9, 0.9, -0.45, 0.45, 0],
		transition: {
			duration: 0.38,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop"
		}
	}
};

const BELL_LEFT_VARIANTS: Variants = {
	idle: { y: 0, rotate: 0 },
	active: {
		y: [0, -0.45, -0.2, -0.55, -0.25, 0],
		rotate: [0, -10, -6, -9, -5, 0],
		transition: {
			duration: 0.34,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop"
		}
	}
};

const BELL_RIGHT_VARIANTS: Variants = {
	idle: { y: 0, rotate: 0 },
	active: {
		y: [0, -0.45, -0.2, -0.55, -0.25, 0],
		rotate: [0, 10, 6, 9, 5, 0],
		transition: {
			duration: 0.34,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop"
		}
	}
};

const HAND_VARIANTS: Variants = {
	idle: {
		rotate: 0,
		transition: {
			duration: 0.2
		}
	},
	active: {
		rotate: [0, 5, -5, 4, -4, 2.5, -2.5, 0],
		transition: {
			duration: 0.42,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "loop"
		}
	}
};

const LEG_LEFT_VARIANTS: Variants = {
	idle: { y: 0, rotate: 0 },
	active: {
		y: [0, 0.15, -0.1, 0.1, -0.05, 0],
		rotate: [0, -1, 0.7, -0.6, 0.25, 0],
		transition: {
			duration: 0.38,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const LEG_RIGHT_VARIANTS: Variants = {
	idle: { y: 0, rotate: 0 },
	active: {
		y: [0, 0.15, -0.1, 0.1, -0.05, 0],
		rotate: [0, 1, -0.7, 0.6, -0.25, 0],
		transition: {
			duration: 0.38,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};

const Alarm = forwardRef<SVGSVGElement, IconProps>(
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
					<motion.path d="M12 9v4l2 2" variants={HAND_VARIANTS} style={{ transformOrigin: "12px 13px" }} />
					<motion.path d="M5 3 2 6" variants={BELL_LEFT_VARIANTS} style={{ transformOrigin: "5px 3px" }} />
					<motion.path d="m22 6-3-3" variants={BELL_RIGHT_VARIANTS} style={{ transformOrigin: "19px 3px" }} />
					<motion.path d="M6.38 18.7 4 21" variants={LEG_LEFT_VARIANTS} style={{ transformOrigin: "6.38px 18.7px" }} />
					<motion.path d="M17.64 18.67 20 21" variants={LEG_RIGHT_VARIANTS} style={{ transformOrigin: "17.64px 18.67px" }} />
				</motion.g>
			</svg>
		);
	}
);

Alarm.displayName = "Alarm";
export default Alarm;
