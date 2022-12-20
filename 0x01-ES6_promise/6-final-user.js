import { uploadPhoto } from "./utils";
import { signUpUser } from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]).then((values) => {
    const results = [];
    for (const item of values) {
      results.push({ status: item.status, value: item.value || item.reason });
    }
    return results;
  });
}
