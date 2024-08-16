import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photo) => {
      console.log(photo.body);
      return createUser(); // Chain the next promise
    })
    .then((user) => {
      console.log(user.firstName, user.lastName); // Assuming `user` is an object with `firstName` and `lastName`
    })
    .catch((error) => {
      console.error('Signup system offline'); // Handle any errors that occur in the promise chain
    });
}
