var MongoClient = require("mongodb").MongoClient;

var helper = {
  url: "mongodb://localhost:27017/guitars_owned",
  all: function(onQueryFinished) {

    MongoClient.connect(this.url, function(err, db) {

      var guitarsCollection = db.collection("guitars");

      guitarsCollection.find().toArray(function(err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = helper;
