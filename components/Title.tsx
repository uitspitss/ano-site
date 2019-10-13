import * as React from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  title?: string;
};

const Title: React.FC<Props> = ({
  title = 'This site is H.A&apos;s Homepage',
}) => <Header as="h1">{title}</Header>;

export default Title;
