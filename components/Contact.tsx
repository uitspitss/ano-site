import * as React from 'react';

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
  <>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
      obcaecati distinctio tempore dolor, fugit doloremque error iste maxime
      quisquam voluptas explicabo exercitationem quaerat asperiores, laboriosam
      debitis cupiditate veniam unde.
    </p>
    <p>Mail: {mail}</p>
    <p>Production: {productionName}</p>
    <p>Zip Code: {zipCode}</p>
    <p>Address: {address}</p>
    <p>Tel: {tel}</p>
    <p>Fax: {fax}</p>
  </>
);

export default Contact;
