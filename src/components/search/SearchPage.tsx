import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";

const StyledSearchPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

	
`;

const SearchPage: React.FC<any> = () => {
    return (
        <StyledSearchPage>
            <form role="search">
                <div>
                    <input type="search" id="mySearch" name="q"
                        placeholder="Search the site..."
                        aria-label="Search through site content" />
                    <button>Search</button>
                </div>
            </form>
        </StyledSearchPage>
    );
};

export default SearchPage;
