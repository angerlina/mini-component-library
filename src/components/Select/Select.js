import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <SelectWrapper tabIndex="0">
            <ValueLabel>
                <div>{displayedValue}</div>
                <Icon id='chevron-down' size={16} strokeWidth={2}/>
            </ValueLabel>
            <OptionsWrapper value={value} onChange={onChange} tabIndex="-1">
                {children}
            </OptionsWrapper>
        </SelectWrapper>
    );
};

const OptionsWrapper = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }
`

const ValueLabel = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  color: ${COLORS.gray700};
  white-space: nowrap;
  font-size: 16px;
  padding: 8px 10px 12px 16px;
  
  *:first-child {
    margin: 0 18px 0 0;
  }

  > * {
    display: inline-block;
    vertical-align: middle;
  }

`
export default Select;
