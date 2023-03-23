const Router = require('express')
const bodyParser = require('body-parser')



const router = new Router()
const conroller = require("./controller")
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/addStatus',urlencodedParser,conroller.addStatus)
router.get('/getAllStatus',conroller.getAllStatus)
router.put('/update',conroller.update)
router.delete('/delete/:id',conroller.deleteStatus)



module.exports = router