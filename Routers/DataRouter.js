const Router = require('express')
const router = new Router()
const DataController = require('../Controllers/DataController')

router.get('/file/:filename', DataController.GetFile)
 






module.exports = router