let {ObjectID} = require('mongodb');

let {mongoose} = require('./../server/db/mongoose');
let {Todo} = require('./../server/models/todo');
let {User} = require('./../server/models/user');

// var id = '5ad5e3c6c2ccbbdc05e78a9a';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("ID not found");
//   }
//   console.log("Todo By Id", todo);
// }).catch((e) => console.log(e));

User.findById('5ad5ca6daea997da4483a9e4').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})

//mongoose/docs/queries
