const Character = require('../data/Character')

const getAllCharacter = () => {
    const allCharacters = Character.getAllCharacter()
    return allCharacters
}
const getOneCharacter = (id) => {
    const character = Character.getOneCharacter(id)
    return character;
}
const deleteOneCharacter = (id) => {
    const deletedCharacter = Character.deleteOneCharacter(id)
    return deletedCharacter;
}
const createOneCharacter = (body) => {
    const newCharacter = Character.createCharacter(body)
    return newCharacter;
}
const updateOneCharacter = (id, body) => {
    const updatedCharacter = Character.updateOneCharacter(id, body)
    return updatedCharacter;
}

module.exports = {
    getAllCharacter,
    getOneCharacter,
    deleteOneCharacter,
    createOneCharacter,
    updateOneCharacter
}