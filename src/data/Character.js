const db = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllCharacter = ()=>{
    return db;
}

const getOneCharacter = (id)=>{
    const character = db.find(charact=> charact.id === +id)
    console.log(character);
    return character;
}

const createCharacter = (newCharacter) => {
    
    const isAdded = db.findIndex((character) => character.name === newCharacter.name)

    if(isAdded > -1){
        return;
    }

    db.push(newCharacter)
    saveToDatabase(db)
    return newCharacter;
}

const deleteOneCharacter = (id) => {
    const deletedCharacter = db.findIndex(character => character.id == id)
    if(deletedCharacter > -1){
        db.splice(deletedCharacter,1)
        saveToDatabase(db)

    }
    
    
    return deletedCharacter;
}

const updateOneCharacter = (id, changes) => {
    const updatedCharacter = db.findIndex(character => character.id == id)
    console.log(updatedCharacter)
    if(updatedCharacter > -1){

        let newCharacterUpdated = {
            ...db[updatedCharacter],
            ...changes
        }

        db[updatedCharacter] = newCharacterUpdated;
        

        saveToDatabase(db)
        return newCharacterUpdated;
    }
    return updatedCharacter;
}


module.exports = {
    getAllCharacter,
    getOneCharacter,
    createCharacter,
    deleteOneCharacter,
    updateOneCharacter
}