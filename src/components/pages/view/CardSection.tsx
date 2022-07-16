import styled from 'styled-components';

const StyledCardSection = styled.div`
    h3 {
        text-transform: uppercase;
        font-size: 80%;
        margin-bottom: 8px;
        color: ${props => props.theme.text.secondary};
    }
    & > .content {
        background: #fafafa;
        border-radius: 8px;
        padding: 8px;
    }
`;

const CardSection = ({ title, children }) => {
    return (
        <StyledCardSection>
            <h3>{title}</h3>
            <div className="content">
                {children}
            </div>
        </StyledCardSection>
    );
}

export default CardSection;
