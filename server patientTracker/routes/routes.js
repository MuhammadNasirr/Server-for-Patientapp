const EntryController = require('../controllers/entry_controller');


module.exports = (app) => {
    app.post('/api/entries', EntryController.create);
    app.get('/api/entries/:doctorId', EntryController.getAll);
    app.put('/api/entries/:entryId', EntryController.edit);
    app.delete('/api/entries/:entryId', EntryController.delete);
}