// core node js woh features packages hote hai jo jab ham node js ko install krskte hai toh uske sath install hoke ajate hai system mein 

// file system file se related saari cheezon ke liye hota hai create read update delete     




const fs = require("node:fs");
// write file : to create new file.
// appendfile : to add on a existinf file.
// readfile : read a existing file.
// readdir : read a folder 
// copy file : copy a file from folder and past to another.
// unlink(remove) file : remove a file.
//  mkdir: make a new folder 
// rmdir : remove a existing folder 


// fs.writeFile("./hey.txt",  "hii i am samad ali", function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("successfully created a file.");
//     }
// })




// fs.writeFile("main.c", "hello world in c language", function(err){
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log("successfully created a file.");
//     }
// })


// fs.writeFile("main.java", "helloworld in java ", function(err){
//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log("successsfulyy created java file.");
//     }
// })


// fs.appendFile("./main.java", "java is good programming langauge for tech", function(err){

//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log("successfully append file in existing file of java .");
//     }
// })


// fs.readFile("./main.java",  "utf-8",   function(err, data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// syed samad ali 

// fs.readFile("./main.c", "utf-8", function(err, data){
//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log(data);
//     }
// })



// fs.readdir("./folderpractice", {withFileTypes : true},     function(err, files){
// if(err){
//     console.log(err);
// }

// // else{
// //     console.log(files);
// // }



//  files.forEach(function(elem){
//      console.log(elem.name , elem.isDirectory());
//  })
// })



// fs.copyFile("./folderpractice/main.js",   "main2.js", function(err){
//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log("successfully copied a main.js file");
//     }
// } ) 




// fs.copyFile("./folderpractice/first.cpp", "second.cpp", function(err){
//     if(err){
//         console.log(err);
//     }



//     else{
//         console.log("successfully copied !");
//     }
// })


// fs.appendFile("./second.cpp", "this is the second file of the cpp which was copied from the folderpractice folder ..",   function(err){
//     if(err){
//         console.log(err);
//     }

//     else{
//         console.log("successfully append file ")

//     }
// })


// fs.unlink("./main.c",  function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file is removed successfully !");
//     }
// })



// fs.mkdir("./createdfolder",  function(err){
//     if(err){
//         console.log(err);
//     }


//     else{
//         console.log("folder created successfully !")
//     }

// })


// fs.rmdir("./createdfolder",     function(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("folder removed successfully !");
//     }
// })
