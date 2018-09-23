/**
 * @file suite
 * @author zhanfang (fzhanxd@gmail.com)
 */

const Event = require('./event');
const Benchmark = require('./benchmark');

class Suite {

    constructor(name, options) {
        this.benches = [];
        this.name = name;
        this.options = options;
        this.events = {};
    }

    add(name, fn, options) {
        const bench = new Benchmark(name, fn, options);
        const event = new Event({type: 'add', target: bench});

        if (this.emit(event), !event.cancelled) {
            this.benches.push(bench);
        }

        return this;
    }

    on(type, listener) {
        const events = this.events;

        if (events[type]) {
            events[type].push(listener);
        }

        return this;
    }

    run(options) {
        let suite = this;

        suite.reset();
        suite.running = true;
        options || (options = {});

        this.invoke(this.benches, {
            name: 'run',
            args: options,
            queued: options.queued,
            onStart(event) {
                suite.emit(event);
            },
            onCycle(event) {
                const bench = event.target;
                if (bench.error) {
                    suite.emit({type: 'error', target: bench});
                }

                suite.emit(event);
                event.aborted = suite.aborted;
            },
            onComplete(event) {
                suite.running = false;
                suite.emit(event);
            }
        });
        return suite;
    }

    emit(type) {}

    reset() {}

    invoke(benches, options) {
        let args = null;
        let index = -1;
        let queued = null;
        const eventProps = {
            currentTarget: benches
        };
        const result = new Array(this.benches.length);

        for (let i = 0, len = this.benches.length; i < len; i++) {
            let bench = this.benches[i];
            console.log(options.name);
            result[index] = bench[options.name].apply(bench, args);
        }
    }
}

module.exports = Suite;
