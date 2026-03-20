module.exports = (app) => {
        const helpdeskLibrary = require('../controllers/helpdeskController');

    app
        .route('/helpdesk')
        .get(helpdeskLibrary.list_all_helpdesks)
        .post(helpdeskLibrary.create_a_helpdesk);
app
        .route('/helpdesk/:helpdeskId')
        .get(helpdeskLibrary.read_a_helpdesk)
        .put(helpdeskLibrary.update_a_helpdesk)
        .delete(helpdeskLibrary.delete_a_helpdesk);
};