import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

export interface IListItem {
    text: string;
    link?: string;
}

export interface IList {
    title?: string;
    subtitle?: string;
    lists?: IList[];
    items?: | IListItem[];
}

const StyledList = styled.section`
    li {
        margin-left: 8px;
    }
    li:not(:first-child) {
        margin-top: 4px;
    }
    h1, h2, h3, h4, h5, h6, h7 {
        font-weight: bold;
    }
    h1, h2, h3, h4, h5, h6, h7, ul {
        margin-top: 16px;
        margin-left: 8px;
    }
`;

const Heading: React.FC<any> = ({ title, subtitle, level }) => {
    const Title = `h${level}` as any;
    const Subtitle = `h${level + 1}` as any;
    return (
        <>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </>
    )
}

export const List: React.FC<IList & { level?: number, prefix?: string }> = ({ title, subtitle, items, lists, level = 1, prefix = '' }) => {

    //const HeadTag = level === 1 ? PageTitle : level === 2 ? Card : Heading

    return (
        <StyledList>
            <Heading title={title} subtitle={subtitle} level={level} />
            <ul>
                {items && items.length > 0 && (
                    items.map(({ text, link }) => (
                        <li key={text}>{
                            link ? <Link to={`${prefix}${link}`}>{text}</Link> : text
                        }</li>
                    ))
                )}
                {lists && (
                    <li>
                        {lists.map(l => <List {...l} key={l.title} level={level + 1} prefix={prefix} />)}
                    </li>
                )}
            </ul>
        </StyledList>
    );
}
