var should=require("should");
var fs = require('fs');
var ytdl = require('ytdl');
var ffmpeg = require('ffmpeg');
var nock = require('nock');
var path = require('path');
var url = require('url'); 

var capture=function(user, link){
	var stream = ytdl(link);
	stream.pipe(fs.createWriteStream('temp.flv'));
	var process = new ffmpeg(path.resolve('temp.flv'));
	process.then(function (video) {
        // Callback mode
        console.log(video);
        video.fnExtractSoundToMP3('sound.mp3', function (error, file) {
            if (!error)
                console.log('Audio file: ' + file);
        });
    });

	return {'user':user};
};

describe('capture', function(){
	it('should capture user, sound and date from a video link for a user',function(done){
		var captured_item=capture('dvilchez', 'https://www.youtube.com/watch?v=U9H3V9YmMwE');

		captured_item.user.should.be.equal('dvilchez');
		captured_item.date.should.be.equal('??');
		streamEqual();		
	});
});	