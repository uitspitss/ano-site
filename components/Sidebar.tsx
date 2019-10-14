import * as React from 'react';
import styled from '@emotion/styled';
import {
  Sidebar,
  SidebarPushable,
  Menu,
  Segment,
  Icon,
} from 'semantic-ui-react';

type LinkContent = { title: string; url: string };

type Links = LinkContent[];

type Props = {
  links?: Links;
};

const StyledSidebar = styled(Sidebar)`
  &&& {
    background-color: #f0f0ff;
  }
`;

const CustomSidebar: React.FC<Props> = ({
  links = [{ title: 'link-title', url: 'link-url' }],
}) => (
  <SidebarPushable as={Segment}>
    <StyledSidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      // visible
      width="wide"
    >
      {links.map(link => (
        <Menu.Item as="a" key={link.title}>
          <Icon name="home" />
          {link.title}
        </Menu.Item>
      ))}
    </StyledSidebar>
  </SidebarPushable>
);

export default CustomSidebar;
