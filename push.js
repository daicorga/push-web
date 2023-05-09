var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BJTEuYZl70V9wu9wU8wBPU4YKDquSrWYt2r5V5yPptM4VfTyhP5XBmqMisDS5YhcwEnkXJdUznNzsio-FT2T9bk',
    privateKey: '8n70BXZ3U-ZxS3Z0lDFBCxCStyCurBJYdvvf09WHc18'
  }

push.setVapidDetails('mailto:dairo.cortes@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
let sub ={};
push.sendNotification(sub, 'test message')
