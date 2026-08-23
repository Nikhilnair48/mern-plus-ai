/*
Slide 66: Imported name does not exist

BROKEN
import { formatTheme } from "./profile-utils.js";

FIXED
import { formatProfileTheme } from "./profile-utils.js";

Cause: a named import must match the exported name.
*/

/*
Slide 67: The next stage receives undefined

BROKEN
loadProfile()
  .then(profile => {
    const updatedProfile = {
      ...profile,
      theme: "Dark"
    };
  })
  .then(updatedProfile => {
    console.log(updatedProfile);
  });

FIXED
loadProfile()
  .then(profile => {
    const updatedProfile = {
      ...profile,
      theme: "Dark"
    };

    return updatedProfile;
  })
  .then(updatedProfile => {
    console.log(updatedProfile);
  });

Cause: a block-bodied callback needs return to pass the value forward.
*/

/*
Slide 68: await is outside an async function

BROKEN
function showProfile() {
  const profile = await loadProfile();
}

FIXED
async function showProfile() {
  const profile = await loadProfile();
  return profile;
}

Cause: this lecture uses await inside an async function.
*/
