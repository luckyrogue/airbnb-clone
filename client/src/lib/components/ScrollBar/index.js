import React from 'react';
import { Link } from 'react-scroll';

import { Wrapper, InnerWrapper } from './ScrollBar.style';
export const ScrollBar = ({ menu = [], other, height, className }) => {
  const addAllClasses = ['scrollbar'];

  if (className) {
    addAllClasses.push(className);
  }
  return (
    <Wrapper className={addAllClasses.join(' ')} height={height}>
      <InnerWrapper>
        <div className='scrollbar_left'>
          {menu.map(menuItem => (
            <Link
              key={menuItem.target}
              className='linkItem'
              activeClass='active'
              to={menuItem.target}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-170}
              duration={600}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
        <div className='scrollbar_right'>{other && other}</div>
      </InnerWrapper>
    </Wrapper>
  );
};
