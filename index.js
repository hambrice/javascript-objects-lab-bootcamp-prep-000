var recipes = {}
function updateObjectWithKeyAndValue (recipe, key, value) {
  return Object.assign ({}, recipe, {[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  
}