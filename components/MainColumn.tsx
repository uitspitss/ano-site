import * as React from 'react';

type Props = {};

const MainColumn: React.FC<Props> = ({ children }) => (
  <>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </>
);

export default MainColumn;
