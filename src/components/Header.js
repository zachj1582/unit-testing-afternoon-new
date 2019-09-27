import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../styled/Div';
import { StyledLink } from '../styled/Button';

const Header = () => {
  return (
    <Div flexed filled="dark" justify="flex-end">
      <StyledLink noborder as={Link} to="/">
        Posts
      </StyledLink>
    </Div>
  );
};

export default Header;
