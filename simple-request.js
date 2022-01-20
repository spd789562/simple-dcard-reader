const axios = require('axios');
const koa = require('koa');
require('dotenv').config();

const server = new koa();

server.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET,OPTIONS,HEAD');
  await next();
});

server.use(async (ctx) => {
  const proxyUrl = ctx.query.u;
  if (!proxyUrl) {
    ctx.status = 400;
    ctx.body = '';
    return;
  }
  const url = Array.isArray(proxyUrl) ? proxyUrl[0] : proxyUrl;
  const proxyResponse = await axios.get(decodeURIComponent(url));
  ctx.type = 'json';
  ctx.body = proxyResponse.data;
});

server.listen(process.env.REACT_APP_API_PORT, () => {
  console.log(`Server is listening on port ${process.env.REACT_APP_API_PORT}`);
});
