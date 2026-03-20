const mongoose = require('mongoose'),
 Helpdesk = mongoose.model('helpdesk');

exports.list_all_helpdesks = (req, res) => {
    Helpdesk.find({}, (err, helpdesk) => {
        if (err) res.send(err);
        res.json(helpdesk);
    });
};

exports.create_a_helpdesk = (req, res) => {
    const newHelpdesk = new Helpdesk(req.body);
    newHelpdesk.save((err, helpdesk) => {
        if (err) res.send(err);
        res.json(helpdesk);
    });
};

exports.read_a_helpdesk = (req, res) => {
    Helpdesk.findById(req.params.helpdeskId, (err, helpdesk) => {
        if (err) res.send(err);
        res.json(helpdesk);
    });
};

exports.update_a_helpdesk = (req, res) => {
    Helpdesk.findByIdAndUpdate(
        {_id: req.params.helpdeskId},
        req.body,
        {new: true},
        (err, helpdesk) => {
            if (err) res.send(err);
            res.json(helpdesk);
        }
    );
};

exports.delete_a_helpdesk = (req, res) => {
    Helpdesk.findByIdAndRemove({_id: req.params.helpdeskId}, err => {
        if (err) res.send(err);
        res.json({ 
            message: 'Helpdesk deleted successfully',
            id: req.params.helpdeskId
         });
    });
};