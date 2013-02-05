JsSIP.WebRTC = {

  isSupported: function() {
    if (JsSIP.WebRTC.getUserMedia && JsSIP.WebRTC.RTCPeerConnection) {
      return true;
    }
    else {
      return false;
    }
  }

};


// getUserMedia().
if (window.navigator.getUserMedia) {
  JsSIP.WebRTC.getUserMedia = window.navigator.getUserMedia.bind(navigator);
}
else if (window.navigator.webkitGetUserMedia) {
  JsSIP.WebRTC.getUserMedia = window.navigator.webkitGetUserMedia.bind(navigator);
}
else if (window.navigator.mozGetUserMedia) {
  JsSIP.WebRTC.getUserMedia = window.navigator.mozGetUserMedia.bind(navigator);
}

// RTCPeerConnection().
if (window.RTCPeerConnection) {
  JsSIP.WebRTC.RTCPeerConnection = window.RTCPeerConnection;
}
else if (window.webkitRTCPeerConnection) {
  JsSIP.WebRTC.RTCPeerConnection = window.webkitRTCPeerConnection;
}
else if (window.mozRTCPeerConnection) {
  JsSIP.WebRTC.RTCPeerConnection = window.mozRTCPeerConnection;
}
