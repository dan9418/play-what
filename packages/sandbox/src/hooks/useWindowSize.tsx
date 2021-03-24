import React from 'react';
import { useMediaQuery } from 'react-responsive';

const BREAK_POINT = {
	Tablet: 512,
	Desktop: 1024
}

export const useIsMobile = () => useMediaQuery({ query: `(max-width: ${BREAK_POINT.Tablet -1}px)` });

export const useIsTablet = () => useMediaQuery({ query: `(min-width: ${BREAK_POINT.Tablet}px)` });

export const useIsDesktop = () => useMediaQuery({ query: `(min-width: ${BREAK_POINT.Desktop}px)` });

/*
export const Mobile = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
	const isMobile = useIsMobile();
	return isMobile ? null : children;
};*/
