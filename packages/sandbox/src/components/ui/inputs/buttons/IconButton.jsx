import React from 'react';
import { css } from 'styled-components';
import Icon from "../../assets/Icon";
import ButtonInput from "./ButtonInput";

const styles = css`
    padding: 16px;

    border-radius: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
	&:hover {
		background-color: rgba(0,0,0,0.1);
    }

	& svg, & svg * {
		color: #AAA;
    	fill: #AAA;
	}
`;

const IconButton = ({ iconId, onClick, size = 16, ...rest }) => {
	return (
		<ButtonInput onClick={onClick} css={styles} {...rest} >
			<Icon iconId={iconId} size={size} />
		</ButtonInput>
	);
};

export default IconButton;
