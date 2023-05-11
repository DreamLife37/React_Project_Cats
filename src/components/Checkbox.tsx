import React, {FC} from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  margin: 10px;
`;

const CheckboxLabel = styled.label`

`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }
`;

type PropsType = {
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    title: string
    disabled?: boolean
}

export const Checkbox: FC<PropsType> = ({checked, onChange, id, title, disabled}) => {
    return <CheckboxContainer>
        <StyledCheckbox
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
        <CheckboxLabel htmlFor={id}>{title}</CheckboxLabel>
    </CheckboxContainer>
}