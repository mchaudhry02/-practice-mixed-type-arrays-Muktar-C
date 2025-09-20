// Task 1: Create the Profile
let profile = {
  userName: "Alice",
  age: 25,
  subscriptionStatus: "Active",
  location: "New York",
  hobbies: ["Reading", "Traveling"]
};

// Task 2: Access and Log Profile Details
console.log("User's Name:", profile.userName);
console.log("Second Hobby:", profile.hobbies[1]);

// Task 3: Modify the Profile
profile.age = 26; // update age
profile.hobbies.push("Photography"); // add a new hobby

// Task 4: Display the Updated Profile
console.log("Updated Profile:", profile);

