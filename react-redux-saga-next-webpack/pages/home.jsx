import react from "react";
import fetch from 'isomorphic-unfetch'

const Home = ({ stars }) => {
console.log("stars", stars);
return <p>homeee</p>;
};

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}
export default Home;
