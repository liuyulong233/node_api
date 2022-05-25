const webrtcIO=require('./webrtc/index')
module.exports.listen = (io) => {
    io.of('webrtc')
    .on('connection',webrtcIO);
   
}