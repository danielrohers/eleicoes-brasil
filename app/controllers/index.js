const Information = require('../models/information');
const City = require('../models/city');

module.exports = {

  renderIndex : (req, res, next) => {
    Information
      .find({})
      .sort('-enable -created')
      .then(information => res.render('index', { title: 'Informações sobre candidatos RS - 2016', information: information }))
      .catch(next);
  },

  renderNew : (req, res, next) => {
    City
      .find({})
      .sort('name')
      .then(cities => res.render('new', { title: 'Novo candidato', cities: cities }))
      .catch(next);
  },

  create : (req, res, next) => {
    let information = new Information();
    information.title = req.body.title;
    information.description = req.body.description;
    information.links = req.body.links;
    information.city = req.body.city;
    information
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }

};
