import getConfig from "next/config";

const hello = 
  getConfig().serverRuntimeConfig.hello ||
  getConfig().publicRuntimeConfig.hello;

export default function Home({ staticHello }) {
  return (<>hello: {hello}<br/>staticHello: {staticHello}</>)
}

export function getStaticProps() {
  return {
    props: { staticHello: hello }
  }
}
