const config = {};

if (process.env.NODE_ENV === 'test') {
  Object.assign(config, {
    BASE_API: 'http://testcalapi.hellogeek.com',
    API: 'http://testjiweatapph5.hellogeek.com',
  });
} else if (process.env.NODE_ENV === 'prod') {
  Object.assign(config, {
    BASE_API: 'http://calapi.51jirili.com',
    API: 'http://jiweatapph5.hellogeek.com',
  });
} else {
  Object.assign(config, {
    BASE_API: 'http://devcalapi.hellogeek.com',
    API: 'http://devjiweatapph5.hellogeek.com',
  });
}

export default config;
