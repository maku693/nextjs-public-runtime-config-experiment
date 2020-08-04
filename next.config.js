module.exports = () => {
  return {
    serverRuntimeConfig: {
        envHello: process.env.HELLO,
        hello: "hello~",
    },
    publicRuntimeConfig: {
        hello: "こんにちは〜"
    },
  };
};
