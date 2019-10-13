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

const CustomSidebar = styled(Sidebar)`
  &&& {
    background-color: #f0f0ff;
  }
`;

// const CustomMenu = styled(Menu)`
//   &&& {
//     color: #ff0000;
//   }
// `;

const LeftColumn: React.FC<Props> = ({
  links = [{ title: 'link-title', url: 'link-url' }],
}) => (
  <SidebarPushable as={Segment}>
    <CustomSidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      width="wide"
    >
      {links.map(link => (
        <Menu.Item as="a" key={link.title}>
          <Icon name="home" />
          {link.title}
        </Menu.Item>
      ))}
    </CustomSidebar>
  </SidebarPushable>
);

export default LeftColumn;
