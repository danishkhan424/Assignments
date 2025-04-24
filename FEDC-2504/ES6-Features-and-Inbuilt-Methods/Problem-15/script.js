const user = {
  id: 123,
  profile: {
    name: "John Doe",
    address: {
      city: "Los Angeles",
      zipcode: "90001"
    }
  }
};

// const user = { id: 123, profile: { name: "John Doe" } };
const { id } = user;

const name = user?.profile?.name || "Information not available";

const address = user?.profile?.address || {};

const { city = "Information not available", zipcode = "Information not available" } = address;

const message = `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;

console.log(message);
