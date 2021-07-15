import { inflate } from 'zlib'

const pubsub = {
  subscribe: undefined,
  publish: undefined,
  unsubscribe: undefined
};

(function (myObject) {

  // Storage for topics that can be broadcast
  // or listened to
  const topics = {}

  // A topic identifier
  let subUid = -1

  // Publish or broadcast events of interest
  // with a specific topic name and arguments
  // such as the data to pass along
  myObject.publish = function (topic, args) {

    if (!topics[topic]) {
      return false
    }

    const subscribers = topics[topic]
    let len = subscribers ? subscribers.length : 0

    while (len--) {
      subscribers[len].func(topic, args)
    }

    return this
  }

  // Subscribe to events of interest
  // with a specific topic name and a
  // callback function, to be executed
  // when the topic/event is observed
  myObject.subscribe = function (topic, func) {

    if (!topics[topic]) {
      topics[topic] = []
    }

    const token = (++subUid).toString()
    topics[topic].push({
      token: token,
      func: func
    })
    return token
  }

  // Unsubscribe from a specific
  // topic, based on a tokenized reference
  // to the subscription
  myObject.unsubscribe = function (token) {
    for (const m in topics) {
      if (topics[m]) {
        for (let i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1)
            return token
          }
        }
      }
    }
    return this
  }
}(pubsub))


// Another simple message handler

// A simple message logger that logs any topics and data received through our
// subscriber
const messageLogger = function (topics, data) {
  console.log(`Logging: ${ topics }: ${ data }`)
}

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g. messageLogger) once a new
// notification is broadcast on that topic
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger)

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish('inbox/newMessage', 'hello world!')

// or
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c'])

// or
pubsub.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey again!'
})

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe(subscription)

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish('inbox/newMessage', 'Hello! are you still there?')