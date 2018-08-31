const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useMongoClient: true});

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
});

const pokemonSchema = mongoose.Schema({
  poke_id: {type: Number, unique: true},
  poke_name: String,
  poke_img: String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;