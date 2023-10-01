import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { replaceAll } from "../../../../core/primitives/String.utils";
import { MediaQuery } from "../../../styles/breakpoint";
import Icon from "../ui/Icon";
import { usePageProps } from "../utils/PagePropsContext";

const StyledBreadcrumbList = styled.ul`
  font-size: 80%;
  padding: 8px;
  ${MediaQuery.Tablet} {
    font-size: 100%;
  }

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  text-transform: capitalize;
  svg {
    margin-right: 8px;
  }

  span {
    color: ${(props) => props.theme?.text?.secondary};
  }
`;

const NON_LINK_TERMS = ["view", "root", "browse"];

const BreadcrumbList = () => {
  //return null;
  const { path } = usePageProps();

  let pieces = path.split("/");
  const paths: any[] = [];

  pieces.reduce((prev, cur, i, arr) => {
    const path = `${prev}/${cur}`.replace("//", "/") || "/";
    const isLink = !NON_LINK_TERMS.includes(cur);
    const text =
      i === 0
        ? "Home"
        : replaceAll(
          cur.replace(" sharp", "#").replace(" flat", "b"),
          "-",
          " "
        );

    const Tag = isLink ? Link : "span";
    const to = isLink ? path : undefined;

    paths.push(
      <li key={i}>
        {i > 0 && <Icon iconId="next" size={10} color="grey" />}
        {/* @ts-ignore */}
        <Tag to={to}>{text}</Tag>
      </li>
    );
    return path;
  }, "/");

  return (
    <StyledBreadcrumbList>
      {paths.slice(0, paths.length - 1)}
    </StyledBreadcrumbList>
  );
};

export default BreadcrumbList;
