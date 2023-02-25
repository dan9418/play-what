import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import ColumnManager from "../column-manager/ColumnManager";
import PageLayout from "../layout/PageLayout";
import Card from "../ui/Card";

const StyledAboutPage = styled(PageLayout)`
  li a {
    display: block;
    padding: 8px;
  }
`;

const Page: React.FC = () => {
  return (
    <StyledAboutPage title="About">
      <ColumnManager>
        <Card title="What Is Play What?">
          <p>
            Play What is a website for visualizing music theory concepts and
            exploring their relationships. The site provides an interface for
            inspecting the details of chords and scales and how they are played
            on some common instuments.
          </p>
          <p>
            The <Link to="/help">Help Page</Link> contains information on the
            different features offered by Play What.
          </p>
          <p>
            The <Link to="/help">Coming Soon Page</Link> includes details on
            potential new features and a tentative release schedule.
          </p>
        </Card>
        <Card title="About The Author">
          <p>
            Play What is developed by Dan Bednarczyk, an engineer and multimedia
            artist from Pittsburgh, PA.
          </p>
          <ul>
            <li>
              <a href="http://danbednarczyk.com/">Website</a>
            </li>
            <li>
              <a href="https://www.instagram.com/dan.bednarczyk/">Instagram</a>
            </li>
            <li>
              <a href="https://danbednarczyk.bandcamp.com/">Bandcamp</a>
            </li>
            <li>
              <a href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ">
                Spotify
              </a>
            </li>
            <li>
              <a href="https://music.apple.com/us/artist/dan-bednarczyk/1590781822">
                Apple Music
              </a>
            </li>
          </ul>
        </Card>
        <Card title="License">
          <p>
            The <a href="https://github.com/dan9418/play-what">code</a> for Play
            What is public, but is currently published under a proprietary
            software license restricting all modifications and redistribution.
            There are plans to officially open-source the code in the future,
            but it is not yet ready for public contribution. By using Play What
            and/or its code repository, you hereby agree to not share the source
            code or any derivatives.
          </p>
        </Card>
        <Card title="Developers">
          <p>
            Play What is developed with TypeScript, React, and Gastby and is
            hosted on GitHub Pages using entirely frontend technologies.
          </p>
          <p>
            The site is powered by a flexible, extensible, and efficient
            modeling system for musical intervals.
          </p>
          <p>
            Comprehensive documentation will be provided when this project
            reaches the official open source phase.
          </p>
          <p>
            The <Link to="/dev">Developer Panel</Link> includes experimental and
            admin features.
          </p>
        </Card>
      </ColumnManager>
    </StyledAboutPage>
  );
};

export default Page;
