//Статусы
const {Schema,model} = require('mongoose')


const statusSchema = new Schema ({
    // Вид статуса
    typeStatus: {
        type: String,
        require: true,
    },
    // Название Статуса
    nameStatus: {
        type: String,
        require: true
    }
})

module.exports = model('statusSchema',statusSchema)
