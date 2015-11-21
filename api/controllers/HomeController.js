/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jenkins = require('jenkins')('http://52.91.227.96:8080')

module.exports = {

  show: function(req, res) {
    jenkins.view.list(function(err, data) {
      if (err) throw err;
        return res.view('home', {
          projects: data
        });
    });
  }

};
