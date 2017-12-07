/**
 * Created by Lily on 2017/10/24.
 */
let http = require('http');
let fs = require('fs');
let url = require('url');
let sliders = require('./db/sliders.js');
function getBook(callback) {
  fs.readFile('./db/book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]);
    } else {
      callback(JSON.parse(data));
    }
  })
}
function writeBook(data, cb) {
  fs.writeFile('./db/book.json', JSON.stringify(data), cb);
}
// let data =require ('./db/data.json')
http.createServer(function (req, res) {
  let {query, pathname} = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders));
  } else if (pathname === '/api/hot') {
    getBook(function (data) {
      /*reverse保证id大的值在后面；每次获取12条数据*/
      res.end(JSON.stringify(data.reverse().slice(0, 12)));
    });
  } else if (pathname === '/api/book') {
    let id = parseInt(query.id);
    /*是否传递了id  字符串类型转换成int*/
    switch (req.method) {
      case 'GET':
        if (id) {//根据id查询某一个
          getBook(function (books) {
            let book = books.find(item => item.id === id);
            let result = {book};
            if (book) {
              result.err = 0;
            } else {
              result.err = 1;
            }
            res.end(JSON.stringify(result));
          })
        } else {//查询所有
          getBook(function (data) {
            res.end(JSON.stringify(data.reverse()));
          })
        }
        break;
      case 'POST':
        //获取客户端传递过来的数据
        let str = '';
        req.on('data', function (chunk) {
          str += chunk;
        });
        req.on('end', function () {
          let book = JSON.parse(str);
          getBook(function (books) {
            book.id = books.length ? books[books.length - 1].id + 1 : 1;
            books.push(book);
            writeBook(books, function () {
              res.end(JSON.stringify(book));
            })
          })
        })
        break;
      case 'DELETE':
        if (id) {
          getBook(function (books) {
            books = books.filter(item => item.id !== id);
            writeBook(books, function () {
              res.end(JSON.stringify({}));
            });
          })
        }
        break;

      case 'PUT':
        if (id) {
          let str = '';
          req.on('data', function (chunk) {
            str += chunk;
          });
          req.on('end', function () {
            let book = JSON.parse(str);
            getBook(function (books) {//获取所有书
              books = books.map(item => {
                if (item.id === id) {
                  return book;
                }
                return item;
              });
              writeBook(books, function () {
                res.end(JSON.stringify(book));
              })
            });

          });
        }
        break;
    }
  }
  /*  if (pathname === '/api/data') {
   res.end(JSON.stringify(data));
   }*/
}).listen(3206);






