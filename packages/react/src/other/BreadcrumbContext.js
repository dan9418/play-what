import React, { createContext, useContext, useState } from 'react';

const BreadcrumbContext = createContext(null);

export const BreadcrumbContextProvider = ({ children }) => {
	const [breadcrumbs, setBreadcrumbs] = useState(['cell']);
	const pushBreadcrumb = b => setBreadcrumbs([...breadcrumbs, b]);
	const popBreadcrumb = () => setBreadcrumbs(breadcrumbs.slice(0, breadcrumbs.length - 1));

	const breadcrumbContext = {
		breadcrumbs,
		pushBreadcrumb,
		popBreadcrumb
	};

	return (
		<BreadcrumbContext.Provider value={breadcrumbContext}>
			{children}
		</BreadcrumbContext.Provider>
	);
}

const useBreadcrumbContext = () => useContext(BreadcrumbContext);

export default useBreadcrumbContext;
