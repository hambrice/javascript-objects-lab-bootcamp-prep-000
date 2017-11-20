var recipes = {}
function updateObjectWithKeyAndValue (recipe, key, value) {
  return Object.assign ({}, key, {[key]:value});
}