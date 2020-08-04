import getConfig from "next/config";

export default function Home({ staticProps }) {
  return (
    <>
      <p>
        server: <code>{ JSON.stringify(staticProps) }</code>
      </p>
      <p>
        client: <code>{ JSON.stringify(getConfig()) }</code>
      </p>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      staticProps: getConfig()
    }
  }
}
