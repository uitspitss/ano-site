import * as React from 'react';

type Info = {
  mediaType: string;
  title: string;
  date: string;
};

type Props = {
  infos?: Info[];
};

const LatestInfo: React.FC<Props> = ({
  infos = [
    {
      mediaType: 'stage',
      title: 'Romeo and Juliet',
      date: 'this summer',
    },
  ],
}) => (
  <>
    <ul>
      {infos &&
        infos.map(({ mediaType, title, date }) => (
          <li key={title}>
            {mediaType}
            <p>{title}</p>
            <p>{date}</p>
          </li>
        ))}
    </ul>
  </>
);

export default LatestInfo;
