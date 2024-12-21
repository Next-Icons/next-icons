import React, { createContext } from "react";

export const NextIconsContext = createContext();
NextIconsContext.displayName = "NextIconsContext";

export const NextIconsProvider = ({ children, primaryColor, secondaryColor, set, size, stroke }) => {
	const defaultValues = {
		primaryColor: primaryColor || "currentColor",
		secondaryColor: secondaryColor || null,
		set: set || "light",
		size: size || "md",
		stroke: stroke || "regular"
	};

	return <NextIconsContext.Provider value={defaultValues}>{children}</NextIconsContext.Provider>;
};
