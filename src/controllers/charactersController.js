const characterService = require('../services/characterService')
const db = require('../data/db.json')


const getAllCharacter = (req,res) => {
    const allCharacters = characterService.getAllCharacter()
    res.send({result:'OKAY', data: allCharacters})
}

const getOneCharacter = (req,res)=>{
    const character = characterService.getOneCharacter(req.params.characterId)
    if(!character){
        return res.send({result: 'NOT OKAY', data: 'the character with this id does not exist'})
    }
    res.send({result:'OKAY', data:character})
}

const deleteOneCharacter = (req,res)=>{
    const deletedCharacter = characterService.deleteOneCharacter(req.params.characterId)
    console.log(deletedCharacter)
    if(deletedCharacter == -1){
        return res.send({result: `The character with the id ${req.params.characterId} does not exist`})
    }
    res.send({result: `Deleted Character with id: ${req.params.characterId}`})
}

const createOneCharacter = (req,res)=>{
    const { name, description, avatar } = req.body;
    if(!name ||
        !description ||
        !avatar){
        return;
     }
 
     const newCharacter = {
         name,
         description,
         avatar,
         id: db.length + 1
     }
    const createdCharacter = characterService.createOneCharacter(newCharacter)
    if(!createdCharacter){
        return res.send({result: 'NOT OKAY', data: 'This Character is already created'})
    }
    res.send({result: 'Character Created', data: createdCharacter})
}

const updateOneCharacter = (req,res)=>{
    
    const updatedCharacter = characterService.updateOneCharacter(req.params.characterId, req.body)
    if(updatedCharacter == -1){
        return res.send({result: 'NOT OKAY', data: 'The character with this id does not exist'})
    }
    res.send({result: `Character with id: ${req.params.characterId} has been updated correctly`, data: updatedCharacter})
}

module.exports = {
    getAllCharacter,
    getOneCharacter,
    deleteOneCharacter,
    createOneCharacter,
    updateOneCharacter
}