import React from 'react';
import { withRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import Div from '../styled/Div';
import styled from 'styled-components';
import { StyledLink } from '../styled/Button';

const PostWidget = ({
  title,
  text,
  userId,
  displayName,
  id,
  showLink = true,
  history,
  expanded = false,
  fullWidth = false,
}) => {
  return (
    <PostContainer
      flexed
      direction="column"
      onClick={() => history.push(`/post/${id}`)}
      fullWidth={fullWidth}
    >
      <Div flexed justify="center" position="relative">
        <h2>{title}</h2>
        {showLink ? (
          <UserLink
            fullWidth={fullWidth}
            color="black"
            noborder
            onClick={e => {
              e.stopPropagation();
              history.push(`/user/${userId}`);
            }}
          >
            {displayName}
          </UserLink>
        ) : null}
      </Div>
      <p>{expanded ? text : shortenText(text)}</p>
    </PostContainer>
  );
};

const PostContainer = styled(Div)`
  border: 1px solid black;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '550px')};
  margin: 10px 15px;
  :hover {
    cursor: pointer;
  }
`;

const UserLink = styled(StyledLink)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5em 0 0 1.5em;
  ${({ fullWidth }) => (fullWidth ? '' : 'font-size: .8em;')}
`;

export default withRouter(PostWidget);
