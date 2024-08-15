export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success)
      resolve({status: 200, body: 'Success'});
    else if(!success)
      reject("The fake API is not working currently");
  });
}
