const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Pokemon', {useMongoClient: true});

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  user_name: String,
  poke_id: Number,
  poke_name: String,
  poke_img: String
});

const User = mongoose.model('User', userSchema);

const selectAll = (username, callback) => {
  User.find({}, (err, user) => {
    if(err) {
      return err;
    } else {
      // console.log('the user in db index ', user);
      // console.log('the call back ', callback);
      // callback(null, user);
    }
  });
};

const save = (user, pokemon) => {
  console.log(user, pokemon);
  let newUser = new User({
    user_name: user,
    poke_id: pokemon.id,
    poke_name: pokemon.name,
    poke_img: pokemon.img
  });

  newUser
  .save((err) => {
    if (err) {
      return err;
    } else {
      console.log('saved');
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.User = User;