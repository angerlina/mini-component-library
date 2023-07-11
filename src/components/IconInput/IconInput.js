import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       placeholder,
                   }) => {
    const styles = STYLES[size];
    return <Wrapper width={width} style={{'--fontSize': styles.fontSize/16 + 'rem', '--height': styles.height/16 + 'rem', '--borderThickness': styles.borderThickness + 'px'}}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <NativeInput placeholder={placeholder} id="my-input"
                     style={{'--height': styles.height + 'px'}}/>
        <IconWrapper for="my-input" style={{'--iconSize': styles.iconSize + 'px'}}>
            <Icon id={icon} size={STYLES[size].iconSize} strokeWidth={2}/>
        </IconWrapper>
    </Wrapper>;
};


const STYLES = {
    small: {
        height: 24,
        fontSize: 14,
        borderThickness: 1,
        iconSize: 16
    },
    large: {
        height: 36,
        fontSize: 18,
        borderThickness: 2,
        iconSize: 24
    }
}

const Wrapper = styled.div`
  font-size: var(--fontSize);
  font-weight: 700;
  height: var(--height);
  position: relative;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  color: ${COLORS.gray700};
  width: ${props => props.width + 'px'};
  background-color: inherit;

  &:hover {
    color: ${COLORS.black};
  }
`

const NativeInput = styled.input`
  padding-left: var(--height);
  border: none;
  height: 100%;
  width: 100%;
  position: relative;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  background-color: inherit;
  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.label`
  height: var(--iconSize);
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
`

export default IconInput;
