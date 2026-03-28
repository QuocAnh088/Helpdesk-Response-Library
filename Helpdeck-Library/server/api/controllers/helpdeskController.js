const mongoose = require('mongoose'),
 Helpdesk = mongoose.model('helpdesk');

exports.list_all_helpdesks = async (req, res) => {
    try {
        const helpdesks = await Helpdesk.find({});
        res.json(helpdesks);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create_a_helpdesk = async (req, res) => {
    try {
        const newHelpdesk = new Helpdesk(req.body);
        const helpdesk = await newHelpdesk.save();
        res.json(helpdesk);
    } catch (err) {
        res.status(500).send(err);
    }
};


exports.read_a_helpdesk = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.findById(req.params.helpdeskId);
        res.json(helpdesk);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update_a_helpdesk = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.findByIdAndUpdate(
            {_id: req.params.helpdeskId},
            req.body,
            {new: true}
        );
        res.json(helpdesk);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete_a_helpdesk = async (req, res) => {
    try {
        const helpdesk = await Helpdesk.findByIdAndRemove({_id: req.params.helpdeskId});
        res.json({ 
            message: 'Helpdesk deleted successfully',
            id: req.params.helpdeskId
         });
    } catch (err) {
        res.status(500).send(err);
    }
};