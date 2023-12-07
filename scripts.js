function makeCall() {
    console.log('make call')
    document.querySelector('iframe#zoom-embeddable-phone-iframe').contentWindow.postMessage({
        type: 'zp-make-call',
        data: {
          number: "3035650001",
          callerId: "Tommy",
          autoDial: true
        }
    }, 'https://applications.zoom.us');
}
    