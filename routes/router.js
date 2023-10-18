var express = require("express");
var router = express.Router();


var fabricadeconexao = require("../../config/connection-factory");
var conexao = fabricadeconexao();

const { body, validationResult } = require("express-validator");

router.get('/', function (req, res) {
  res.render('pages/home');
});


router.get('/home', function (req, res) {
  res.render('pages/home');
});


router.get('/perfil', function (req, res) {
  res.render('pages/perfil');
});

router.get('/selecao_chat', function (req, res) {
  res.render('pages/selecao_chat');
});

router.get('/produto', function (req, res) {
  res.render('pages/produto');
});

router.get('/login', function (req, res) {
  res.render('pages/login');
});

router.get('/carrinho', function (req, res) {
  res.render('pages/carrinho');
});

router.get('/comunidade', function (req, res) {
  res.render('pages/comunidade');
});

router.get('/cadastro', function (req, res) {
  res.render('pages/cadastro');
});

router.get('/criarcomun', function (req, res) {
  res.render('pages/criarcomun');
});

router.get('/mercado', function (req, res) {
  res.render('pages/mercado');
});

router.get('/perfil', function (req, res) {
  res.render('pages/perfil');
});

router.get('/produto', function (req, res) {
  res.render('pages/produto');
});

router.get('/comunM', function (req, res) {
  res.render('pages/comunM');
});

router.get('/comunG', function (req, res) {
  res.render('pages/comunG');
});

router.post(
  "/cadastro",

  body("nome").isLength({ max: 20 }),
  body("email").isEmail(),



  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.json(errors);
    }

    var dadosForm = {
      email: req.body.email,
      username: req.body.nome,
      senha: req.body.senha

    }

    conexao.query(
      "INSERT INTO usuario SET ?",
      dadosForm,

      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      });


    res.redirect("/");
  }


);

module.exports = router