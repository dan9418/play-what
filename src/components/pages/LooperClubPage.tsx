import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import Card, { StyledCard } from "../ui/Card";

const StyledLooperClubPage = styled(StyledPageBody)`
	${StyledCard} {
        margin-top: 16px;
		ul {
			margin-bottom: 16px;
		}
        li {
            padding: 8px;
            font-size: 120%;
        }
    }

	p {
		margin-bottom: 16px;
	}

	h4 {
		margin: 8px 0;
		color: ${({ theme }) => theme.text.secondary};
	}

	.contact {
		display: grid;
		@media(min-width: 512px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
		
		th, td {
			text-align: left;
			padding: 8px;
			&:not(:last-child) {
				border-right: 1px solid ${({ theme }) => theme.utils.border};
			}
		}
		thead {
			color: white;
			background-color: ${({ theme }) => theme.surface.nav};
		}
		tbody {
			tr:nth-child(2n) {
				background-color: ${({ theme }) => theme.surface.bg};
			}
		}
	}
`;

const StyledDirt = styled.div`
	> iframe {
		border-radius: 5px;
		width: 275px;
		height: 365px;
	}

	display: flex;
	align-items: center;
	justify-content: center;
`;

const Dirt: React.FC = () => (
	<StyledDirt>
		<iframe
			src="https://player.radioking.io/sacramentodirt/?c=%232F3542&c2=%23ffffff&f=v&i=1&p=1&s=0&li=1&popup=1&plc=0&h=365&l=275&v=2"
			frameBorder="0" >
		</iframe>
		<script
			type="text/javascript"
			src="https://player.radioking.io/scripts/iframe.bundle.js">
		</script>
	</StyledDirt>
);

const LooperClubPage: React.FC = () => {

	return (
		<StyledLooperClubPage>
			<PageTitle title="Looper Club" subtitle="The Library of Musiclandria" />
			<Card title="Workshops" >
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Topic</th>
							<th>Links</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>4/13/22</td>
							<td>Looping basics</td>
							<td>
								<a target='_blank' href='https://docs.google.com/presentation/d/1l6zCgsN9t4kfMcHPHay-_Q-2Ps3RKWtKqQCC8SEHyYc/edit?usp=sharing'>Slides</a>
							</td>
						</tr>
						<tr>
							<td>5/11/22</td>
							<td>Quantization</td>
							<td>
								TBA
							</td>
						</tr>
						<tr>
							<td>6/?/22</td>
							<td>???</td>
							<td>

							</td>
						</tr>
						<tr>
							<td>7/?/22</td>
							<td>???</td>
							<td>

							</td>
						</tr>
					</tbody>
				</table>
			</Card>
			<Card title="Contact"  >
				<div className="contact">
					<div>
						<h3>The Library of Musiclandria</h3>
						<h4>Venue & Sponsor</h4>
						<ul>
							<li><a href="https://www.musiclandria.com/">Website</a></li>
							<li><a href="https://www.instagram.com/musiclandria/">Instagram</a></li>
							<li><a href="https://www.facebook.com/libraryofmusiclandria/">Facebook</a></li>
							<li><a href="https://www.musiclandria.com/donate-monthly">Donate</a></li>
						</ul>
					</div>
					<div>
						<h3>Dan Bednarczyk</h3>
						<h4>Workshop Facilitator</h4>
						<ul>
							<li><a href="https://www.instagram.com/pineapple_dan_creates/">Instagram</a></li>
							<li><a href="https://danbednarczyk.com/">Website</a></li>
							<li><a href="https://danbednarczyk.bandcamp.com/">Bandcamp</a></li>
							<li><a href="https://open.spotify.com/artist/37bMMmv82uI3xhb0S8hL9V?si=HTEihmXtSt-aBan4obvTJQ">Spotify</a></li>
							<li><a href="https://music.apple.com/us/artist/dan-bednarczyk/1590781822">Apple Music</a></li>
						</ul>
					</div>
				</div>
			</Card>
			<Card title="Sacramento Dirt Radio" >
				<p>
					Sacramento Dirt is a new radio station featuring only local Sacramento artists which is run out of The Library of Musiclandria.
				</p>
				<Dirt />
			</Card>
		</StyledLooperClubPage>
	);
};

export default LooperClubPage;
