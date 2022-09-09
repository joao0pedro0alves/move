import {EventEmitter, Listener} from "events"

class Client {
    eventEmitter: EventEmitter
    constructor() {
        this.eventEmitter = new EventEmitter()
    }

    on(eventName: string | number, listener: Listener) {
        this.eventEmitter.on(eventName, listener)
    }

    removeEventListener(eventName: string | number, listener: Listener) {
        this.eventEmitter.removeListener(eventName, listener)
    }

    emit(event: string | number, payload?: any, error = false) {
        this.eventEmitter.emit(event, payload, error)
    }

    once(eventName: string | number, cb: Listener) {
        this.eventEmitter.once(eventName, cb)
    }

    getEventEmitter() {
        return this.eventEmitter
    }
}

export default new Client()
