/**
 * @file event
 * @author zhanfang (fzhanxd@gmail.com)
 */

class Event {
    constructor(type) {
        let event = this;
        if (type instanceof Event) {
            return type;
        }

        return (event instanceof Event)
            ? Object.assign(event, {
                timeStamp: Date.now()
            }, typeof type === 'string' ? {
                type: type
            } : type)
            : new Event(type);
    }
}

module.exports = Event;
