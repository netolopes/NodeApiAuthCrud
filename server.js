import app from './app'

const port = process.env.APP_PORT
app.listen(port)
/*
const port = 3001
app.listen(port, () => {
  console.log();
  console.log(`Escutando a porta ${port}`);
  console.log(`http://localhost${port}`);
})
*/
