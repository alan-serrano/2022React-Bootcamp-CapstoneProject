import React from 'react';
import Layout from './Layout';

export default function FullLayout(props) {
  return (
    <Layout header footer>
      {props.children}
    </Layout>
  );
}
