import dotenv from 'dotenv'
import { resolve } from 'path';

dotenv.config()
// conexao cm db
import './database'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import tokenRoutes from './routes/tokenRoutes'
import alunoRoutes from './routes/alunoRoutes'
import fotoRoutes from './routes/fotoRoutes'

// permitir acesso da api somente para esses sites
const whiteList = [
  'https://react1.otaviomiranda.com.br',
  'https://react2.otaviomiranda.com.br',
  'http://localhost:3000',
  // 'https://pt.wikipedia.org',  somente em producao
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express(); // atributo da  classe "this.app"
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions))
    this.app.use(helmet())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    // this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
    this.app.use(express.static(resolve(__dirname, 'uploads'))); // MUDA AO COLOCAR EM 'DIST' PARA PRODUCAO!!!!!!
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/users/', userRoutes)
    this.app.use('/tokens/', tokenRoutes)
    this.app.use('/alunos/', alunoRoutes)
    this.app.use('/fotos/', fotoRoutes)
  }
}

export default new App().app
