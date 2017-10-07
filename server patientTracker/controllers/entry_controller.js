const Entry = require('../models/Entry');

module.exports = {
  create(req, res, next) {
    const entryProps = req.body;
    Entry.create(entryProps)
      .then(entry => { console.log(entry) 
      return res.send(entry)})
      .catch(next);
  },
  getAll(req, res, next){
    const doctorId = req.params.doctorId;
    Entry.find({doctorId: doctorId})
      .then(entries =>{
        console.log(entries);
        res.send(entries)})
      .catch(next);
  },
  edit(req, res, next){
    const entryId = req.params.entryId;
    const entryProps = req.body;

    Entry.findByIdAndUpdate({_id: entryId}, entryProps)
      .then(() => Entry.findById({_id: entryId}))
      .then(entry => res.send(entry))
      .catch(next);
  },
  delete(req, res, next){
    const entryId = req.params.entryId;

    Entry.findByIdAndRemove({_id: entryId})
      .then(entry => res.status(204).send(entry))
  }
}