import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';

type Props = {
  title: string;
  errorCode: number;
};

class Error extends React.Component<Props> {
  static async getInitialProps({ res }: NextPageContext): Promise<Props> {
    return {
      title: `Error: ${res!.statusCode}`,
      errorCode: res!.statusCode,
    };
  }

  render() {
    const { title, errorCode } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        {errorCode}
      </>
    );
  }
}

export default Error;
