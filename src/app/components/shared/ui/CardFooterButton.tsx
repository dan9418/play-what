import React, { HTMLProps, PropsWithChildren } from "react";
import styled from "styled-components";
import Icon from "./Icon";


export interface ICardFooterButtonProps extends PropsWithChildren, HTMLProps<HTMLButtonElement> {
    isActive?: boolean;
}

export const StyledCardFooterButton = styled.div`
    background: ${(props) => props.theme?.surface?.card};
    border-radius: 0 0 12px 12px;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
    border: none;
    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${(props) => props.theme?.action?.interactive};

    &:hover {
        background: ${(props) => props.theme?.utils?.hoverDark};
        color: ${(props) => props.theme?.action?.active};
    }

    svg {
        margin-left: 8px;
        margin-bottom: 2px;
        * {
            fill: ${(props) => props.theme?.action?.interactive};
        }
    }
`;

const CardFooterButton: React.FC<ICardFooterButtonProps> = ({
    children,
    isActive = false,
    ...rest
}) => {
    return (
        <StyledCardFooterButton type="button" $isActive={isActive} {...rest}>
            {children}
            <Icon iconId={isActive ? 'up' : 'down'} size={8} />
        </StyledCardFooterButton>
    );
};

export default CardFooterButton;
