const os = require('os');
module.exports = {
    random: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    getWlanIP: function () {
        var interfaces = os.networkInterfaces();
        // console.log('interfaces', interfaces.WLAN);
        for (let alias of interfaces.WLAN) {
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }

    }
}