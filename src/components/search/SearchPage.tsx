import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../_shared/layout/PageBody";

const StyledSearchPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

    form {
        width: 100%;
        .search-bar {
            width: 100%;
            max-width: 512px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 8px;

            input, button {
                padding: 4px 8px;
                border-radius: 8px;
                border: 1px solid ${props => props.theme.utils.border};
            }
        }
    }
`;

const SearchPage: React.FC<any> = () => {
    return (
        <StyledSearchPage>
            <form role="search">
                <div className="search-bar">
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
