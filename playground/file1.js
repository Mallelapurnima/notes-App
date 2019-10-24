const msg=require("./file2")//returned value is assigned to variable,as it was a single export,we donot gert object

const {note,note1}=require('./file3')//returned value is an object and we do destructuring, as we have mutliple exports

const file4=require('./file4')//entire  returnde object is put in the variable file4

const file5=require('./file5')
console.log(msg)
console.log(note,note1)
console.log(file4.info,file4.anotherinfo)//as file4 is an object we can call properties
console.log(file5)