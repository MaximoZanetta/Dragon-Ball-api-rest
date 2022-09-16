const express = require('express')
const router = express.Router()
const charactersController = require('../controllers/charactersController')


router.get('/',charactersController.getAllCharacter)

router.get('/:characterId',charactersController.getOneCharacter)

router.delete('/:characterId',charactersController.deleteOneCharacter)

router.post('/',charactersController.createOneCharacter)

router.put('/:characterId',charactersController.updateOneCharacter)




module.exports = router