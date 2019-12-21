import React from 'react';
import fetch from 'isomorphic-unfetch';

const Home = ({ stars }) => (
  <>
 <p>{stars}</p>
 </>
);
Home.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  console.log("json", json);
  return { stars: json.stargazers_count };
};
export default Home;
