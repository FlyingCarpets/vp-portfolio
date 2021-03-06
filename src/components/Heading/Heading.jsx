import * as React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Heading = ({ children, className }) => (
  <StyledH1 className={className}>{children}</StyledH1>
);
