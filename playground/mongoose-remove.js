let {ObjectID} = require('mongodb');

let {mongoose} = require('./../server/db/mongoose');
let {Todo} = require('./../server/models/todo');
let {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5ad5fbefa477f2983bb5b7ff').then((todo) => {
  console.log(todo);
})
