import Icon from "@pw/sandbox/src/components/ui/Icon";
import IconButton from "@pw/sandbox/src/components/ui/inputs/buttons/IconButton";
import OverflowMenu from "@pw/sandbox/src/components/ui/layout/OverflowMenu";
import { useIsMobile } from "@pw/sandbox/src/hooks/useWindowSize";
import THEME from "@pw/sandbox/src/styles/theme";
import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.div`
	position: sticky;
    top: 32px;
	z-index: 101;
	border-bottom: 1px solid ${({ theme }) => theme.border};

	padding-left: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 48px;

	background-color: #ecefef;

	.m {
		display: flex;
		> svg {
			margin: 6px 12px;
		}
	}

	.overflow > button {
		padding: 6px 12px;
	}

	button {
		border: none;
		cursor: pointer;
		appearance: none;
		font-weight: bold;
		font-size: 90%;
		color: ${({ theme }) => theme.primary};
		background-color: transparent;
		&.active {
			color: ${({ theme }) => theme.accent};
		}
		&:hover {
			color: ${({ theme }) => theme.active};
		}
	}

`;

const StyledBreadcrumbList = styled.ul`
	display: flex;
	flex-wrap: wrap;

	list-style-type: none;
	color: #555;
	white-space: nowrap;
	
	li {
		margin: 2px 4px;
	}
`;

const StyledButtonWrapper = styled.div`
	white-space: nowrap;
	margin-right: 24px;
`;

const BreadcrumbList: React.FC = () => {

	const fullPath = [];

	const { popAt, pop, prev, next, path } = {} as any;
	const isMobile = useIsMobile();

	const isVisible = fullPath && fullPath.length >= 2;
	if (!isVisible) return null;

	const middle = fullPath.slice(1, fullPath.length - 1);
	const actions = middle.map((x, i) => ({
		name: x.data.name,
		onClick: () => popAt(i)
	}));

	return (
		<StyledWrapper>
			{isMobile && (
				<div className='m'>
					<button type="button" onClick={() => popAt(0)}>
						Home
					</button>
					{fullPath.length < 3 && <Icon iconId="next" size={8} />}
					{fullPath.length >= 3 && <OverflowMenu iconProps={{ rotate: 90, size: 8 }} direction="left" items={actions} />}
					<button type="button" className='active' onClick={null}>
						{fullPath[fullPath.length - 1].data.name}
					</button>
				</div>
			)}
			<StyledBreadcrumbList>
				{!isMobile && fullPath.map((b, i) => {
					const className = i + 1 === fullPath.length ? 'active' : '';
					const onClick = () => popAt(i - 1);
					const isLast = i === fullPath.length - 1;
					return (
						<React.Fragment key={i}>
							<li>
								<button type="button" className={className} onClick={onClick}>
									{b.data.name}
								</button>
							</li>
							{!isLast && (
								<li>
									<Icon iconId="next" size={8} />
								</li>
							)}
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
