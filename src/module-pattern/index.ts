const modulePattern = (function () {
  const firstname = 'Mehran'
  const lastname = 'Janfeshan'
  return {
    getFirstname: function () {
      return firstname
    },

    getLastname: function () {
      return lastname
    }
  }

})()

// Usage:
modulePattern.getFirstname()

modulePattern.getLastname()
