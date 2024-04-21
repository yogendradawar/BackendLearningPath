// #2

    // To use the callback and sync APIs:
    // It is module 

        const fs = require('fs');

        // writeFile --> create new file
        // appendFile --> upadte the same file with new data
        // copyFile --> copy that file data and create new file
        // rename --> rename file
        // unlink --> delete the file
        //  rmdir --- > remove directory(folder) give permission to remove empty folder
        // readfile --> read the file

        //CALLBACK -----> FUNCTIONS
        
        //WriteFile

            // fs.writeFile("hey.txt","tum kese ho",function(err){
            //     if(err) console.log(err);
            //     else console.log("done");
            // })

        //AppendFile

            // fs.appendFile("hey.txt", "mai to accha ho ",function(err){
            //     if(err) console.error(err);
            //     else console.log("done");
            // })

        // RenameFile

            // fs.rename("hey.txt","hello.txt", function(err){
            //     if(err) console.error(err);
            //     else console.log("done");
            // })

        
        // CopyFile

            // fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
            //     if(err) console.error(err.message);
            //     else console.log("done");
            // })

        //unlink -- delete

            // fs.unlink("./hello.txt", function(err){
            //     if(err) console.error(err.message);
            //         else console.log("removed");
            // })

        //Remove Directory (Folder)

            // fs.rmdir("./copy/",{recursive : true},function(err){
            //     if(err) console.error(err);
            //             else console.log("removed");
            // })

            // ---> Also we can use these also

            // fs.rm("./copy/",{recursive : true},function(err){
            //     if(err) console.error(err);
            //             else console.log("removed");
            // })

        // READFILE

            // fs.readFile("./NodeJsAndNpm.txt",function(err){
            //     if(err) console.log(err);
            //     else console.log("done");
            // })


// HTTP protocol use 

        const http = require('http');  //package which is pre installed in node 

        //req - request , res - > response
        
        const server = http.createServer(function(req,res){
            res.end("hello world");
        })

        server.listen(3000);