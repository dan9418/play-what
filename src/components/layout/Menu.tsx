import { Link } from "gatsby";
import React, { useEffect } from "react";
import styled from "styled-components";
import { usePageProps } from "../../contexts/PagePropsContext";

const StyledMenu = styled.div`
  width: 100%;
  @media (min-width: 512px) {
    width: 360px;
  }

  height: 100%;
  background-color: ${({ theme }) => theme.surface.card};
  border-right: 1px solid ${({ theme }) => theme.utils.border};

  position: fixed;
  top: 48px;
  bottom: 0;
  left: 0;
  z-index: 4001;
  padding: 16px 0;

  .active {
    font-weight: bold;
    background-color: ${({ theme }) => theme.surface.bg};
  }

  ul > ul {
    padding-left: 16px;
    font-size: 80%;
    .active {
      border-radius: 8px 0 0 8px;
    }
  }

  a {
    font-size: 120%;
    display: block;
    padding: 8px 16px;
  }
`;

const StyledOverlay = styled.div`
  //width: 100vw;
  //height: 100vw;
  opacity: 0.3;
  background-color: black;
  position: fixed;
  top: 48px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4000;
`;

const getLinkProps = (to: string, currentPath: string, isTop: boolean) => {
  const isActive = isTop ? currentPath === to : currentPath.includes(to);
  return {
    to,
    className: isActive ? "active" : undefined,
  };
};

interface ILink {
  path: string;
  name: string;
  children?: ILink[];
}

const LINKS: ILink[] = [
  {
    path: "",
    name: "Home",
  },
  {
    path: "browse",
    name: "Browse",
    children: [
      {
        path: "chords",
        name: "Chords",
      },
      {
        path: "scales",
        name: "Scales",
      },
    ],
  },
  {
    path: "view/fretboard",
    name: "Fretboard",
  },
  {
    path: "search",
    name: "Search",
  },
  {
    path: "help",
    name: "Help",
  },
  {
    path: "about",
    name: "About",
  },
  {
    path: "coming-soon",
    name: "Coming Soon",
  },
];

const getMenuItem = (
  link: ILink,
  currentPath: string,
  pathParts: string[] = []
) => {
  const { name, path, children } = link;
  const newPathParts = [...pathParts, path];

  const isHome = path === "";
  const isTop = newPathParts.length === 1;

  const fullPath = isHome ? "/" : `/${newPathParts.join("/")}/`;

  return (
    <React.Fragment key={name}>
      <li>
        <Link {...getLinkProps(fullPath, currentPath, isTop)}>{name}</Link>
      </li>
      {children && (
        <ul>
          {children.map((c) => getMenuItem(c, currentPath, newPathParts))}
        </ul>
      )}
    </React.Fragment>
  );
};

const Menu: React.FC<any> = ({ isOpen, setIsOpen, children }) => {
  const { path } = usePageProps();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    closeMenu();
  }, [path]);

  if (!isOpen) return null;

  return (
    <>
      <StyledOverlay onClick={closeMenu} />
      <StyledMenu>
        <ul>{LINKS.map((l) => getMenuItem(l, path))}</ul>
        {children}
      </StyledMenu>
    </>
  );
};

export default Menu;
