const React = require("react");
import { css } from 'styled-components';
import Icon from "../../assets/Icon";
import ButtonInput from "./ButtonInput";

const styles = css`
    padding: 12px;

    border-radius: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
	&:hover {
		background-color: rgba(0,0,0,0.1);
    }
`;

interface IIconButtonProps {
    iconId: string;
    color?: string;
    size?: number;
    onClick?: any
}

const IconButton: React.FC<IIconButtonProps> = ({ iconId, onClick, size = 16, color, ...rest }) => {
    return (
        <ButtonInput onClick={onClick} css={styles} {...rest} >
            <Icon iconId={iconId} size={size} color={color} />
        </ButtonInput>
    );
};

export default IconButton;
