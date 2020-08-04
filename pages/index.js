import getConfig from "next/config";

const hello = 
  getConfig().serverRuntimeConfig.hello ||
  getConfig().publicRuntimeConfig.hello;

export default function Home() {
  return (<>{hello}</>)
}
