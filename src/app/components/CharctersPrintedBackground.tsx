import React, { FC } from 'react';
import styled from '@emotion/styled';

type StyleProps = {
  text: string;
};

const StyledDiv = styled.div<StyleProps>`
  &&& {
    z-index: -20;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &&&::before {
    content: '${props => Array.from(Array(100), _ => props.text + '　')}';
    z-index: -10;
    font-size: 70px;
    font-family: 'Pinyon Script', cursive;
    line-height: 2;
    word-break: break-all;
    position: absolute;
    color: #d3f6e0;
    top: -30px;
  }
`;

type Props = {
  text: string;
};

const CharactersPrintedBackground: FC<Props> = ({ children, text }) => (
  <StyledDiv text={text}>{children}</StyledDiv>
);

export default CharactersPrintedBackground;
