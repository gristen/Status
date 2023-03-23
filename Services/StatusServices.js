const statusSchema = require('../models/status.js')
const { json } = require('body-parser')
class StatusServices
{
    async addStatus(req,res)
    {
       
        const {typeStatus,nameStatus} = req.body
        const status = new statusSchema({typeStatus,nameStatus})
       await status.save()
       return status
       
       
    }
    async getall()
    {
         const query = await statusSchema.find()
         return query
    }
}

module.exports = new StatusServices()