import React from "react";
import styled from "styled-components";

const StyledColorSchemeInput = styled.div`
  padding: 4px 8px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 80%;
    color: ${(props) => props.theme?.text?.secondary};
  }

  input {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
`;

interface IColorSchemeInputProps {
  value: string[];
  setValue: Function;
  labelFn: Function;
}

const ColorSchemeInput: React.FC<IColorSchemeInputProps> = (props) => {
  const { value, setValue, labelFn } = props;

  return (
    <StyledColorSchemeInput>
      {value.map((v, i) => (
        <div>
          <input
            type="color"
            value={v}
            onChange={(e) =>
              setValue([
                ...value.slice(0, i),
                e.target.value,
                ...value.slice(i + 1),
              ])
            }
          />
          <label>{labelFn(i)}</label>
        </div>
      ))}
    </StyledColorSchemeInput>
  );
};

export default ColorSchemeInput;
