import { useMediaQuery } from 'react-responsive';

enum Breakpoint {
	Tablet = 512,
	Desktop = 1024
}

export const useIsMobile = (): boolean => useMediaQuery({ query: `(max-width: ${Breakpoint.Tablet - 1}px)` });

export const useIsTablet = (): boolean => useMediaQuery({ query: `(min-width: ${Breakpoint.Tablet}px)` });

export const useIsDesktop = (): boolean => useMediaQuery({ query: `(min-width: ${Breakpoint.Desktop}px)` });

/*
export const Mobile = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? null : children;
};*/
