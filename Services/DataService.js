const path = require('path')
const fileSystem = require('fs')

class DataService
{
    GetFile(filename)
    {
        var filePath = path.join(__dirname, "../Static", filename);

        var readStream = fileSystem.createReadStream(filePath);

        return readStream;
    }
}


module.exports = new DataService()