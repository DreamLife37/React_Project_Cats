import React, {FC} from "react";
import styled from "styled-components";

type StyledProps = {
    display: string;
}

const StyledImage = styled.img<StyledProps>`
  display: ${props => props.display};
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

type PropsType = {
    src: string
    alt: string
    onLoad: () => void
    onError: () => void
    display: string
}

export const Image: FC<PropsType> = ({src, alt, onLoad, onError, display}) => {
    return <StyledImage src={src} alt={alt} onLoad={onLoad} onError={onError} display={display}/>
}