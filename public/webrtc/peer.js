let PeerConnection = window.RTCPeerConnection ||
                     window.mozRTCPeerConnection ||
                     window.webkitRTCPeerConnection;
class Peer{
    constructor(iceServers,{onicecandidate,ondatachannel,onaddstream}){
        this.rtc = new PeerConnection(iceServers)
        this.onicecandidate=onicecandidate;
        this.ondatachannel=ondatachannel;
        this.onaddstream=onaddstream;
    }
    addStream(stream){
        this.rtc.addStream(stream);
    }
    init(){
        this.rtc.onicecandidate = (event) => {
            this.onicecandidate(event)
        };
        this.rtc.ondatachannel = (event) => {
            this.ondatachannel(event)
        };
        this.rtc.onaddstream = (event) => {
            this.onaddstream(event)
        };
    }
}
//onicecandidate什么时候触发