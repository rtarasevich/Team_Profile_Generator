const Employee = require("../lib/Employee");

test("Create the employee object", () => {
  const employee = new Employee("Max", 55, "kingderp@maxthelab.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Get employee name", () => {
  const employee = new Employee("Max", 55, "kingderp@maxthelab.com");
  expect(employee.getName()).toEqual(expect.any(String));
});

test("Get role of employee", () => {
  const employee = new Employee("Max", 55, "kingderp@maxthelab.com");
  expect(employee.getRole()).toEqual("Employee");
});

test("Get employee ID", () => {
  const employee = new Employee("Max", 55, "kingderp@maxthelab.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("Get employee email", () => {
  const employee = new Employee("Max", 55, "kingderp@maxthelab.com");
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});