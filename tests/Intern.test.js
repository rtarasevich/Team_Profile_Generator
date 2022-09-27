const Intern = require("../lib/intern");
const Employee = require("../lib/Employee");

test("Create the intern object", () => {
  const intern = new Intern("Zot", 7, "mohawkhead@dontjumponmezot.com", "The Mighty Florida Gators");
  expect(intern.school).toEqual(expect.any(String));
});

test("Get intern alma mater", () => {
    const intern = new Intern("Zot", 7, "mohawkhead@dontjumponmezot.com", "The Mighty Florida Gators");
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Get role of employee", () => {
  const intern = new Intern("Zot", 7, "mohawkhead@dontjumponmezot.com", "The Mighty Florida Gators");
  expect(intern.getRole()).toEqual("Intern");
});