function Member(name) {
  this.name = name
  this.chatroom = null
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember)
  },
  receive: function (message, fromMember) {
    console.log(`from: ${ fromMember.name } to: ${ this.name } ${ message }`)
  }
}


function Chatroom() {
  this.members = {}
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member
    member.chatroom = this
  },
  send: function (message, sender, receiver) {
    receiver.receive(message, sender)
  }
}


const chat = new Chatroom()

const bob = new Member('Bob')
const john = new Member('john')
const tim = new Member('tim')

chat.addMember(bob)
chat.addMember(john)
chat.addMember(tim)


bob.send('Hey john', john)