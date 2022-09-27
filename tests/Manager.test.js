const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Create the manager object", () => {
  const manager = new Manager("Harley", 37, "otherlab@maxthelab.com", 808);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Get role of employee", () => {
    const manager = new Manager("Harley", 37, "otherlab@maxthelab.com", 808);
    expect(manager.getRole()).toEqual("Manager");
  });

