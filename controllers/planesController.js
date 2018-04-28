const db = require("../models");

// Defining mongo methods for the planesController
module.exports = {
  // findAll: function(req, res) {
  //   db.Plane
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findByTail: function(req, res) {
    console.log("different", req.params.id)
    db.Plane
      .find()
      .where('tail').equals(req.params.id)

        // .findOne({})
        // .where({tail: req.params.id})
        .then(dbModel => {
          console.log("what is dbModel", dbModel);
          res.json(dbModel);
        });
        // .catch(err => res.status(422).json(err));
        //  function(err, dbModel){
        //   if (!err) {
        //     onsole.log(dbModel);
        //   } else {throw err;}
        // });
      // .find({ tail: "req.params.id" })
      // .where({'tail': '15121' })
      // .or([
      //       {
      //       "metric_source": "AAA Usage"
      //     }, {
      //       "metric_source": "Sandvine"
      //     }
      //   ])
      // .then(dbModel => console.log("What is dbModel", dbModel))
      // .then(dbModel => res.json(dbModel))

      // .catch(err => res.status(422).json(err));
  }
  // create: function(req, res) {
  //   db.Plane
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Plane
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Plane
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
