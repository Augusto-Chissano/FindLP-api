const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const Post = require('../models/Post')


//Configuracoes para o tratamento de imagens
//Caminho para as imagens

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/posts', upload.single('image'), async (req, res) => {
    try {
        // Cria um novo post com os dados e a imagem enviados no corpo da requisição
        const post = new Post({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            location: req.body.location,
            description: req.body.description,
            image: req.file.filename,
        });

        // Salva o post no banco de dados
        await post.save();

        res.status(201).send(post);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
})


router.get('/posts', async (req, res) => {

    try {

        let posts = await Post.find()
        return res.status(200).json(posts)

    } catch (error) {

        return res.status(500).json({ msg: error })

    }
})

module.exports = router