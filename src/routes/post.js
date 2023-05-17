const router = require('express').Router()
const fs = require('fs');
const multer = require('multer')
const path = require('path')
const Post = require('../models/Post')
const withAuth = require('../middlewares/auth')


//Definindo como e onde serao armazenados os arquivos que vierem na requisicao
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/posts', withAuth, upload.single('image'), async (req, res) => {

    const { name, age, date, gender, location, description } = req.body
    const image = req.file.filename
    const author = req.user._id //User passado no middleware withAuth
    let post = new Post({ name, age, date, gender, location, description, image, author })
    try {

        await post.save();
        res.status(201).send(post);

    } catch (error) {
        //Caso ocorra um erro, remover o arquivo.
        fs.unlinkSync(req.file.path)
        res.status(500).json({ error: 'Erro ao tentar publicar!' })
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