export const ENV = {
    dev: 'development',
    prod: 'production',
    test: 'testing'
};

let config = {
    environment: process.env.NODE_ENV || ENV.dev,
    port: process.env.PORT || 3000,
    logging: true
};

// merge environment specific config to default config.
config = { ...config, ...require(`./${config.environment}`).config };

export default config;