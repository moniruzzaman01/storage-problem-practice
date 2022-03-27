const getSavedData = (StorageName) => {
  let storage = {};
  const exist = localStorage.getItem(StorageName);
  if (exist) {
    storage = JSON.parse(exist);
  }
  return storage;
};
const saveToLocal = (storageName, valueKey) => {
  let storage = getSavedData(storageName);
  // storage[id] = 1;

  const exist = storage[valueKey];
  if (exist) {
    storage[valueKey] = storage[valueKey] + 1;
  } else {
    storage[valueKey] = 1;
  }

  localStorage.setItem(storageName, JSON.stringify(storage));
};

const removeSavedData = (storageName, id) => {
  //   console.log("remove clicked");
  const storage = getSavedData(storageName);
  delete storage[id];
  //   delete storage[52785];
  localStorage.setItem("cart", JSON.stringify(storage));
};

export { getSavedData, saveToLocal, removeSavedData };
