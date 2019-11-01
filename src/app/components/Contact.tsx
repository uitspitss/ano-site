import React, { FC, useContext } from 'react';
import { List } from 'semantic-ui-react';

import { TwitterContext } from '../contexts';

type Props = {};

const Contact: FC<Props> = () => {
  const { user } = useContext(TwitterContext);

  return (
    <List>
      <List.Item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
        obcaecati distinctio tempore dolor, fugit doloremque error iste maxime
        quisquam voluptas explicabo exercitationem quaerat asperiores,
        laboriosam debitis cupiditate veniam unde.
      </List.Item>
      <List.Item>
        <List.Content>Mail: {}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Production: {user.location}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Zip Code: {user.id_str}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Address: {user.location}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Tel: {user.id_str}</List.Content>
      </List.Item>
      <List.Item>
        <List.Content>Fax: {user.id_str}</List.Content>
      </List.Item>
    </List>
  );
};

export default Contact;
