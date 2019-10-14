import * as React from 'react';
import { List } from 'semantic-ui-react';

type Props = {
  mail?: string;
  productionName?: string;
  zipCode?: string;
  address?: string;
  tel?: string;
  fax?: string;
};

const Contact: React.FC<Props> = ({
  mail = 'mail@example.com',
  productionName = 'belonging production',
  zipCode = '111-2222',
  address = 'Tokyo, Japan',
  tel = '111-2222-3333',
  fax = '444-5555-6666',
}) => (
  <List>
    <List.Item>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
      obcaecati distinctio tempore dolor, fugit doloremque error iste maxime
      quisquam voluptas explicabo exercitationem quaerat asperiores, laboriosam
      debitis cupiditate veniam unde.
    </List.Item>
    <List.Item>
      <List.Content>Mail: {mail}</List.Content>
    </List.Item>
    <List.Item>
      <List.Content>Production: {productionName}</List.Content>
    </List.Item>
    <List.Item>
      <List.Content>Zip Code: {zipCode}</List.Content>
    </List.Item>
    <List.Item>
      <List.Content>Address: {address}</List.Content>
    </List.Item>
    <List.Item>
      <List.Content>Tel: {tel}</List.Content>
    </List.Item>
    <List.Item>
      <List.Content>Fax: {fax}</List.Content>
    </List.Item>
  </List>
);

export default Contact;
