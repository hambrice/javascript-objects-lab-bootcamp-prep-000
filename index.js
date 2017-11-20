var recipes = {}
function updateObjectWithKeyAndValue (recipe, key, value) {
  return Object.assign ({}, recipe, {[key]:value});
}