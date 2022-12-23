import { css } from 'styled-components';

export const LIST_STYLES_1 = css`
    li {
        margin-left: 8px;
        &:not(:first-child) {
            margin-top: 4px;
        }
    }
    h1, h2, h3, h4, h5, h6, h7 {
        font-weight: bold;
    }
    section {
        margin-left: 8px;
        &:not(:first-child) {
            margin-top: 24px;
        }
    }
    ul {
        &:not(:first-child) {
            margin-top: 8px;
            margin-left: 8px;
        }
    }
`;
