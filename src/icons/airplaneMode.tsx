import React, { forwardRef, SVGAttributes } from "react";

/******************************************************************************
Copyright (c) Alexandr Virgovič.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
}

const AirPlaneMode = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M7.5 20V22L12 20.5L16.5 22V20L14 18V14L21 15.5V13.6487C21 12.9374 20.6222 12.2796 20.0077 11.9212L15 9L15.1977 6.62748C15.3734 4.51935 14 2.5 12 2C10 2.5 8.29504 4.77022 8.67783 7.06701L9 9L3.99226 11.9212C3.37782 12.2796 3 12.9374 3 13.6487V15.5L10 14V18L7.5 20Z" />
		</svg>
	);
});

AirPlaneMode.displayName = "AirPlaneMode";
export default AirPlaneMode;
