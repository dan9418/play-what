import React from "react";
import { useRecoilValue } from "recoil";
import IconButton from "@pw/sandbox/src/components/ui/inputs/buttons/IconButton";
import THEME from "@pw/sandbox/src/styles/theme";
import styled from 'styled-components';
import { usePathNavContext } from "../../../../contexts/PathNavContext";
import { fullPathState } from "../../../../state/pathState";
import Icon from "@pw/sandbox/src/components/ui/Icon";

const StyledWrapper = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledBreadcrumbList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	
	list-style-type: none;
	color: #555;
	white-space: nowrap;

	li {
		margin: 2px 4px;
		button {
			border: none;
			cursor: pointer;
			appearance: none;
			font-weight: bold;
			font-size: 90%;
			color: ${({ theme }) => theme.primary};
			&.active {
				color: ${({ theme }) => theme.accent};
			}
			&:hover {
				color: ${({ theme }) => theme.active};
			}
		}
	}
`;

const StyledButtonWrapper = styled.div`
	white-space: nowrap;
`;

const BreadcrumbList = () => {

	const fullPath = useRecoilValue(fullPathState);
	//const pathHead = fullPath.length ? fullPath[fullPath.length - 1] : null;
	//const { modelId, modelValue, modelOptions } = pathHead.config;

	const { popAt, pop, prev, next, path } = usePathNavContext();

	const isVisible = fullPath && fullPath.length >= 2;

	return (
		<StyledWrapper>
			<StyledBreadcrumbList>
				{isVisible && fullPath.map((b, i) => {
					const className = i + 1 === fullPath.length ? 'active' : '';
					const onClick = () => popAt(i - 1);
					return (
						<React.Fragment key={i}>
							<li>
								<button type="button" className={className} onClick={onClick}>
									{b.data.name}
								</button>
							</li>
							<li>
								<Icon iconId="next" size={8} />
							</li>
						</React.Fragment>
					);
				})}
			</StyledBreadcrumbList>
			<StyledButtonWrapper>
				{false && <IconButton onClick={null} iconId="speaker" />}
				{prev && <IconButton onClick={prev} color={THEME.primary} iconId='prev' />}
				{next && <IconButton onClick={next} color={THEME.primary} iconId='next' />}
				{path.length > 0 && <IconButton onClick={pop} color={THEME.primary} iconId='up' />}
			</StyledButtonWrapper>
		</StyledWrapper>
	);
};

export default BreadcrumbList;
