// Selecting Specific Properties: Given an array of objects with various properties, use filter to select objects that have a specific property defined.
const objects = [
    { name: "John", email: "john@example.com" },
    { name: "Jane" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Alice", email: undefined }
];

// Using !== undefined
const objectsWithEmail1 = objects.filter(obj => obj.email !== undefined);
console.log(objectsWithEmail1);
// Output: [{ name: "John", email: "john@example.com" }, { name: "Bob", email: "bob@example.com" }]

// Using hasOwnProperty
const objectsWithEmail2 = objects.filter(obj => obj.hasOwnProperty('email'));
console.log(objectsWithEmail2);