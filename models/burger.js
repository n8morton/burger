var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    
    create: function(type, cb) {
      orm.insertOne(["burger_type", "is_Devoured"], [type, false], function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("cats", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("cats", condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;