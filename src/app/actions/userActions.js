const updateName = (name) => {
  return {
    type: 'UPDATE_NAME',
    name: name.toUpperCase()
  }
};

export default {updateName};