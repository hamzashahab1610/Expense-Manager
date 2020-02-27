const Transaction = require('../models/Transaction')

// @desc   Get Transactions
// @route  GET /api/v1/transactions
// @access Public

exports.getTransactions = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}

// @desc   Add Transactions
// @route  POST /api/v1/transactions
// @access Public

exports.addTransaction = async(req, res, next) => {
    res.send('POST transactions');
}

// @desc   Delete Transactions
// @route  DELETE /api/v1/transactions
// @access Public

exports.deleteTransaction = async(req, res, next) => {
    res.send('DELETE transactions');
}