const Resi = require("../models/resi");

const getResi = async (req, res) => {
    try {
        const resi = await Resi.find();
        
        res.status(200).json({
            message: "Resi fetched successfully",
            data: resi
        });
    } catch (error) {
        res.status(404).json({
            message: "Resi not found",
            error: error
        });
    }
}

const createResi = async (req, res) => {
    const resi = req.body;

    const newResi = new Resi(resi);

    try {
        await newResi.save();
        res.status(201).json(newResi);
    } catch (error) {
        res.status(400).json({
            message: "Resi not created",
            error: error
        });
    }
}

module.exports = {
    getResi,
    createResi
}