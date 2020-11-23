"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir
// router.get('/', userController.index); // Descomentar se for usar SEED
// router.get('/:id', userController.show); // Lista usuário

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update); // nao precisa setar ID, pois apos logado, usuario sera identificado pelo token
router.delete('/', _loginRequired2.default, _UserController2.default.delete); // setar uma flag no sistema para ativar/destivar

exports. default = router;
