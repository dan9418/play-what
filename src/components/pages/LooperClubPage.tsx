import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../layout/PageBody";
import PageTitle from "../layout/PageTitle";
import Card, { StyledCard } from "../ui/Card";

const StyledLooperClubPage = styled(StyledPageBody)`
	 ${StyledCard} {
        margin-top: 16px;
        li {
            padding: 8px;
            font-size: 120%;
        }
    }

	p {
		margin-bottom: 16px;
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
								<a href=''>Slides</a>
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
