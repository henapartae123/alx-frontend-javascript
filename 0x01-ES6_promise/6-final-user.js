import { uploadPhoto } from "./utils";
import { signUpUser } from "./4-user-promise";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signup, upload]).then((values) => {
    const results = [];
    values.forEach((value) => {
      if (value.status === "fulfilled") {
        results.push({ status: value.status, value: value.value });
      } else {
        results.push({
          status: value.status,
          value: `Error: ${value.reason.message}`,
        });
      }
    });
    return results;
  });
}
