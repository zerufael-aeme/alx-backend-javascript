export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve(() => {
      return {
        firstName: firstName,
        lastName: lastName
      };
    })
  })
}
