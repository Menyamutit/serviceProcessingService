const processingServiceShema = require('./ProcessingService/ProcessingService.js')
const processing = require('./service/serviceProcessingService.js')

class PostController {
    async add(req, res) {
        processing.add(req, res)

    }

    async getAll(req, res) {
        const result = await processing.getAll()

        return res.json(result);
    }
    async update(req, res) {
        const result = await processing.update(req, res)
        return res.json(result);


    }
    async delete(req, res) {

        const result = await processing.delete(req, res)
        return res.json(result);

    }
}
module.exports = new PostController()

