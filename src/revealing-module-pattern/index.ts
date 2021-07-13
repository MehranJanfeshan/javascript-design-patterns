// In this pattern if you want to call a public method or variable then you do not need to use the name of module again and again.
// This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module
// which of our functions and variables may be accessed publicly which eases readability.

// A disadvantage of this pattern is that if a private function refers to a public function,
// that public function can't be overridden if a patch is necessary.
// This is because the private function will continue to refer to the private implementation
// and the pattern doesn't apply to public members, only to functions.


const revealingPattern = (function () {
  const firstname = 'Mehran'
  const lastname = 'Janfeshan'

  function getFirstname() {
    return firstname
  }

  function getLastname() {
    return lastname
  }

  return {
    firstname: getFirstname,
    lastname: getLastname
  }
})()

// Usage:
revealingPattern.firstname()

revealingPattern.lastname()