const processingServiceShema = require('../ProcessingService/ProcessingService.js')



class acceptanse {

    async add(req, res) {

        try {
            const { typeService, nameService, servicePriceProceService, сommentProceService } = req.body
            const Servise = await processingServiceShema.create({ typeService, nameService, servicePriceProceService, сommentProceService })
            res.status(200).json(Servise)
        } catch (e) {
            console.log(e);
        }
    }


    async getAll() {
        try {
            const Servise = await processingServiceShema.find()
            return Servise;

        } catch (e) {
            console.log(e);
        }

    }

    async update(req, res) {
        try {
            const Servise = req.body
            if (!Servise._id) {
                res.status(400).json({ message: "id не указан" })
            }
            const updateServise = await processingServiceShema.findByIdAndUpdate(Servise._id, Servise, { new: true })
            return updateServise;
        } catch (e) {
            console.log(e);
        }


    }


    async delete(req, res) {
        try {
            const { id } = req.params
            const Servise = await processingServiceShema.findByIdAndDelete(id)
            if (!Servise._id) {
                res.status(400).json({ message: "id не указан" })
            }

            return Servise;
        } catch (e) {
            console.log(e);
        }


    }
}
module.exports = new acceptanse();