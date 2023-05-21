const DataService = require('../Services/DataService')
class DataContriller
{
    GetFile(req, res)
    {
        const {filename} = req.params

        const readStream = DataService.GetFile(filename)
        
        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.writeHead(200, {
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        return readStream.pipe(res)
    }
}

module.exports = new DataContriller()