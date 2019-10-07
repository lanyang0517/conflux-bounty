import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../globalStyles/media';

const Container = styled.div`
  ${media.tablet`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  width: 100%;
 `}

  ${media.tabletElse`
 width: 440px;
 height: 60px;
 padding: 2px;
 display: flex;
 align-items: center;
 justify-content: center;
 background: #fff;
 box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
 border-radius: 30px;
 z-index: 100;
 .selected {
   background: linear-gradient(116.19deg, #69c4db -4.77%, #5499dd 101.18%);
   color: #fff;
 }
 `}
`;

const TagItem = styled.div`
  ${media.tablet`
  line-height: 60px;
  font-size: 16px;
text-align: center;
color: #8E9394;
margin-left: 20px;
margin-right: 20px;
flex: 1;
&.selected {
  border-bottom:3px solid #22B2D6;
}
`}

  ${media.tabletElse`
  background: #fff;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  height: 56px;
  cursor: pointer;
  color: #8e9394;
  font-size: 16px;
  letter-spacing: 0.05em;
`}
`;

function HomeTag(props) {
  const { selected, items, onChangeValue } = props;

  return (
    <Container>
      {items.map(item => (
        <TagItem onClick={() => onChangeValue(item.value)} key={item.value} className={selected === item.value ? 'selected' : ''}>
          {item.text}
        </TagItem>
      ))}
    </Container>
  );
}

HomeTag.propTypes = {
  selected: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default HomeTag;
