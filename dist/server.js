"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT
_app2.default.listen(port)

console.log(`http://localhost${port}`);
/*
const port = 3001
app.listen(port, () => {
  console.log();
  console.log(`Escutando a porta ${port}`);
  console.log(`http://localhost${port}`);
})
*/
