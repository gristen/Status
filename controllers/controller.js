const { json } = require('body-parser')
const statusSchema = require('./models/status.js')
const StatusServices = require('./Services/StatusServices.js')


class ControllerStatus{
    async addStatus(req,res)
    {
        
        console.log(await StatusServices.addStatus(req))
    }
    async getAllStatus(req,res)
    {
    const result = await StatusServices.getall()
      return res.json(result)
    }
    async DeleteStatus (req,res)
    {
        const {nameStatus} = req.body
        const resultDelete = await statusSchema.deleteMany({nameStatus})
        return res.json({resultDelete})
    }
    async update (req,res)
    {

        const status = req.body
        console.log(status)
        const updateStatus = await statusSchema.findByIdAndUpdate(status._id,status,{new:true})
        // const {statusName} = req.body
        // console.log(statusName)
        // const updatepost = await statusSchema.updateOne({nameStatus:"name statusaaaaa"},{$set:{nameStatus:"test"}})
        return res.json({updateStatus})
    }
    async deleteStatus(req,res)
    {
        
        const{id} = req.params
        const deleteStatus = await statusSchema.findByIdAndDelete(id)
        return res.json({deleteStatus})
    }
}

module.exports = new ControllerStatus()
