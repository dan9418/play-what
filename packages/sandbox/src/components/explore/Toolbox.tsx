import ModelUtils from "@pw/core/src/models/Model.utils";
import React from "react";
import styled from 'styled-components';
import IconButton from "../shared/ui/inputs/buttons/IconButton";
import SwitchInput from "../shared/ui/inputs/SwitchInput";

const StyledToolbox = styled.div`
	background-color: #e5e8e8;
	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 8px;
	padding: 8px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 8px;
	@media(min-width: 512px) {
		margin-top: 0;
		display: unset;
		height: 100%;
	}

	> div {
		> span {
			font-size: 80%;
			font-weight: 500;
			margin-right: 4px;
			color: #555;
		}

		display: flex;
		align-items: center;
		justify-content: flex-end;
		
		:not(:last-child) {
			margin-right: 8px;
			@media(min-width: 512px) {
				margin-right: 0;
				margin-bottom: 8px;
			}
		}
		
		.btn-speaker {
			height: 24px;
			width: 48px;
			border-radius: 4px;
		}
	}
`;

const Toolbox: React.FC<any> = ({ matchOctave, setMatchOctave }) => {
    return (
        <StyledToolbox>
            <div>
                <span>Match Octave</span>
                <SwitchInput value={matchOctave} setValue={setMatchOctave} />
            </div>
            <div>
                <span>Play Sound</span>
                <IconButton iconId="speaker" onClick={() => ModelUtils.playSound(null)} />
            </div>
        </StyledToolbox>
    );
};

export default Toolbox;
