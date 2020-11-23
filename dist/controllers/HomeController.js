"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    res.json('Index')

  //  const novoAluno = await Aluno.create({
    //   nome: 'neto',
    //   sobrenome: 'lopes',
  //    email: 'lopes@gmail.com',
  //    idade: 40,
  //    peso: 78,
  //    altura: 1.74,
    // })
  //  res.json(novoAluno)
  }
}

exports. default = new HomeController()
