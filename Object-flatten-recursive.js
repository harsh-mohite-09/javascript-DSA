const user = {
  name: "Harsh",
  address: {
    personal: {
      city: "Vadodara",
      area: "Raj Mahal Road",
    },
    office: {
      city: "Bangalore",
      area: {
        landmark: "main junction",
      },
    },
  },
};

const output = {};

const magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      output[parent + "_" + key] = obj[key];
    }
  }
  return output;
};

console.log(magic(user, "user"));
