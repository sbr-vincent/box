import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    background: ${props => props.bgColor};
    width: ${props => props.dimensions+'px'};
    height: ${props => props.dimensions+'px'};
`;

export default StyledBox;