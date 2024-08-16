import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photo) => {
      return createUser().then((user) => {
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
      });
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
