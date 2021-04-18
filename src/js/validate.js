function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let valid = document.querySelector("form");

  let lat = parseFloat(valid._latitude.value);
  let long = parseFloat(valid._longitude.value);
  let latlabel = valid.querySelector("#latvalid > span");
  let longlabel = valid.querySelector("#longvalid > span");
  let istrue = true;

  if (lat < -90 || lat > 90 || isNaN(lat)) {
    latlabel.innerText = "* must be a valid Latitude (-90 to 90)";
    return false;
  } else latlabel.innerText = "*";

  if (long < -180 || long > 180 || isNaN(long)) {
    longlabel.innerText = "* must be a valid Longitude (-180 to 180)";
    return false;
  } else longlabel.innerText = "*";

  return istrue;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
