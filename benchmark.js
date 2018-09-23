/**
 * @file benchmark
 * @author zhanfang (zhanfang@baidu.com)
 */

const Event = require('./event');

let counter = 0;

function formatNumber(number) {
    const comma = ',';
    const string = String(Math.max(0, Math.abs(number).toFixed(0)));
    const length = string.length;
    const end = /^\d{4,}$/.test(string) ? length % 3 : 0;

    return (end ? string.slice(0, end) + comma : '')
        + string.slice(end).replace(/(\d{3})(?=\d)/g, '$1' + comma);
}

class Benchmark {

    /**
     * The number of cycles performed while benchmarking.
     * @member Benchmark
     * @type Number
     */
    static cycles = 0

    /**
     * The number of times a test was executed.
     * @member Benchmark
     * @type Number
     */
    static count = 0

    /**
     * The number of executions per second.
     * @member Benchmark
     * @type Number
     */
    static hz = 0

    /**
     * The relative margin of error (expressed as a percentage of the mean).
     * @member Benchmark
     * @type Number
     */
    static RME = 0

    constructor(name, fn, options) {
        this.name = name;
        this.fn = fn;
        this.id = ++counter;
        this.times = {};
    }

    run(options) {
        let bench = this;
        let event = new Event('start');

        bench.running = true;

        bench.count = bench.initCount;
        bench.times.timeStamp = Date.now();
        // bench.emit(event);
        this.fn();
        return bench;
    }

    toString() {
        const me = this;
        const cycles = me.cycles;
        const error = me.error;
        const pm = '\xb1';
        const x = '\xd7';
        let result = me.name || me.id || ('<Test #' + me.fn.uid + '>');

        if (error) {
        }
        else {
            result += ' '
                + x
                + ' '
                + formatNumber(me.hz)
                + ' '
                + pm
                + me.RME.toFixed(2) + '% (' + cycles + ' cycle' + (cycles === 1 ? '' : 's') + ')';
        }
        return result;
    }
}

module.exports = Benchmark;
