var recipes = {
}

function updateObjectWithKeyAndValue (object, key, value) {
  var updRecipes = Object.assign({}, object, {[key]: value})
  return updRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
