import React, { HTMLProps, PropsWithChildren } from "react";
import styled from "styled-components";


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
`;

const CardFooterButton: React.FC<ICardFooterButtonProps> = ({
    children,
    isActive = false,
    ...rest
}) => {
    return (
        <StyledCardFooterButton type="button" $isActive={isActive} {...rest}>
            {children}
        </StyledCardFooterButton>
    );
};

export default CardFooterButton;
