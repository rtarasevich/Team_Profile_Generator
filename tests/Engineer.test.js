const Employee = require("../lib/Employee");
const Engineer = require("../lib/engineer");

test("Create the engineer object", () => {
  const engineer = new Engineer("Winnie", 16, "whitegold@mamakamas.com", "ScaredOfFireworksGitHub");
  expect(engineer.gitHub).toEqual(expect.any(String));
});

test("Get engineer git hub url", () => {
  const engineer = new Engineer("Winnie", 16, "whitegold@mamakamas.com", "ScaredOfFireworksGitHub");
  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub.toString()));
});

test("Get role of employee", () => {
  const engineer = new Engineer("Winnie", 16, "whitegold@mamakamas.com", "ScaredOfFireworksGitHub");
  expect(engineer.getRole()).toEqual("Engineer");
});