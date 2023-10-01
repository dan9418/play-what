import { Link } from "gatsby";
import React from "react";
import { LIST_STYLES_2 } from "./List.styles";

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

export interface IListProps extends IList {
    level?: number;
    prefix?: string;
    styles?: any;
}

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

export const List: React.FC<IListProps> = ({ title, subtitle, items, lists, level = 1, prefix = '', styles }) => {
    return (
        // @ts-ignore
        <section css={styles}>
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
        </section>
    );
}

export const SimpleList: React.FC<{ items: (string | [string, string])[] }> = ({ items }) => {
    const formattedItems: IListItem[] = items.map(item => {
        if (Array.isArray(item)) {
            const [text, link] = item;
            return {
                text,
                link
            }
        }
        return {
            text: item
        }
    })
    return (
        <List items={formattedItems} styles={LIST_STYLES_2} />
    );
}
