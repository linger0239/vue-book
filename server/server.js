/**
 * Created by Lily on 2017/10/24.
 */
let http = require('http');

//9999拿7777的数据，需要跨域
//协议 主机名 端口不一致会导致跨域
//cors 服务端配置允许前端跨域
//jsonp 服务端返回一个方法执行
//iframe跨域 postMessage
//window.name
//nginx
//webpack实现跨域(上线后配置失效)
let url = require('url');
http.createServer(function (req, res) {
  let {query,pathname } = url.parse(req.url, true);//query是一个字符串，转换成数组在parse后的第二个参数为true
  if (pathname === '/jsonp') {
    let school = {name: 'wahaha'};
    //getDSata(school)
    res.end(`${query.cb}(${JSON.stringify(school)})`);
  }
}).listen(7777);
/*不要和前端的端口重复*/






