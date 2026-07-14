const { AirportService } = require("../services/index");

const AirportServiceInstance = new AirportService();

/**
 * POST
 * data -> req.body
 */
const create = async (req, res) => {
    try {
        const airport = await AirportServiceInstance.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create airport',
            err: error
        });
    }
};

/**
 * DELETE
 * url /airport/:id
 */
const destroy = async (req, res) => {
    try {
        const response = await AirportServiceInstance.deleteAirport(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Not able to delete airport',
            err: error
        });
    }
};

/**
 * GET
 * url /airport/:id
 */
const get = async (req, res) => {
    try {
        const airport = await AirportServiceInstance.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully fetched airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get airport',
            err: error
        });
    }
};

/**
 * GET
 * url /airport
 */
const getAll = async (req, res) => {
    try {
        const airports = await AirportServiceInstance.getAirportAll(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: 'Successfully fetched all airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get airports',
            err: error
        });
    }
};

/**
 * PATCH
 * url /airport/:id
 * data -> req.body
 */
const update = async (req, res) => {
    try {
        const airport = await AirportServiceInstance.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully updated airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update airport',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    getAll,
    update
};