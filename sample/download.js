var should=require("should");
var fs = require('fs');
var ytdl = require('ytdl');
var ffmpeg = require('ffmpeg');
var nock = require('nock');
var path = require('path');
var url = require('url');

//ytdl('http://www.youtube.com/watch?v=2EGL2DAUkyo')
//  .pipe(fs.createWriteStream('video.flv'));
//console.log('tres');
var process = new ffmpeg(path.resolve('./','video.flv'));
process.then(function (video) {
  // Callback mode
  //console.log(video);
  video.fnExtractSoundToMP3('audio_file.mp3', function (error, file) {
    if (!error)

  }, function (err) {
        console.log('Error: ' + err);
    });
});
