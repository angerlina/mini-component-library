/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {
    const styles = SIZES[size]
    return <Wrapper style={styles}>
        <Bar role="progressbar" aria-labelledby="barLabel" aria-valuenow={value} style={styles} aria-valuemin={0}
             aria-valuemax={100}>
            <Value value={value}/>
            <VisuallyHidden>{value}</VisuallyHidden>
        </Bar>
    </Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  width: 270px;
  padding: var(--padding);
  border-radius: var(--borderRadius);
`


const Value = styled.div`
  width: ${props => props.value + '%'};
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

const Bar = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const SIZES = {
    small: {
        '--height': '8px',
        '--padding': 0,
        '--borderRadius': '4px'
    },
    medium: {
        '--height': '12px',
        '--padding': 0,
        'borderRadius': '4px'
    },
    large: {
        '--height': '24px',
        '--padding': '4px',
        '--borderRadius': '8px'
    }
}


export default ProgressBar;
