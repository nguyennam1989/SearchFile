/**
 * Created by QuangNam on 8/1/2015.
 */
var fs = require('fs');
var path = require('path');

function searchfile(filename, folder) {

    fs.readdir(folder, function (err, listFiles) {

        //console.log(listFiles);
        listFiles.forEach(function (item) {

            //console.log(item);

            var pathviews = path.join(__dirname, item);

            fs.stat(pathviews, function (err, stats) {

                if (stats.isFile()&& (filename=path.join(item))) {

                    console.log('Result: ', filename, ' in ', folder);

                }

            });

        });

    });


}

var filename=process.argv[2]?processData:'SearFile.js';
var dirname=process.argv[3]?processData:__dirname;
searchfile(filename,dirname);