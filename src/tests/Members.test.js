import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import Members from "../pages/Members"; // adjust path as needed
import { FETCH_USERS_QUERY } from "../util/graphql";

jest.mock("../components/Title", () => () => <div>Title</div>);
jest.mock("../components/FilterSelection", () => ({ getUsers }) => <div>FilterSelection</div>);
jest.mock("../components/MembersTable", () => ({ users }) => (
  <div data-testid="members-table">MembersTable ({users.length} users)</div>
));

const mockUsers = [
  {
    id: "1",
    firstName: "Alice",
    lastName: "Smith",
    username: "asmith",
    email: "alice@ufl.edu",
    major: "Computer Science",
    year: "2026",
    graduating: "Yes",
    country: "USA",
    classes: ["CIS4301", "CEN3031", "ENC2210", "MAS3114", "STA3032"],
    internships: ["Google", "Meta"],
    confirmed: true,
    permission: "admin",
    listServ: true,
    photo: "alice.jpg",
    ethnicity: "Hispanic",
    sex: "Female",
    points: 100,
    fallPoints: 50,
    springPoints: 50,
    summerPoints: 0,
    socialMedia: "@alicesmith",
    events: [
      {
        id: "evt1",
        name: "GBM 1",
        category: "General",
        createdAt: "2023-09-01T00:00:00.000Z",
        points: 1,
      },
      {
        id: "evt2",
        name: "Hackathon",
        category: "Social",
        createdAt: "2023-10-01T00:00:00.000Z",
        points: 5,
      },
    ],
    createdAt: "2023-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    firstName: "Alex",
    lastName: "Jones",
    username: "ajones",
    email: "alex@ufl.edu",
    major: "Math",
    year: "2027",
    graduating: "No",
    country: "Canada",
    classes: ["MAC2312", "PHY2048", "PHY2048L", "CDA3101", "MAS3114"],
    internships: ["Amazon"],
    confirmed: true,
    permission: "member",
    listServ: false,
    photo: "alex.jpg",
    ethnicity: "Hispanic",
    sex: "Male",
    points: 60,
    fallPoints: 30,
    springPoints: 30,
    summerPoints: 0,
    socialMedia: "@alexjones",
    events: [
      {
        id: "evt1",
        name: "GBM 1",
        category: "General",
        createdAt: "2023-09-01T00:00:00.000Z",
        points: 1,
      },
    ],
    createdAt: "2023-02-01T00:00:00.000Z",
  },
  {
    id: "3",
    firstName: "Charlie",
    lastName: "Brown",
    username: "cbrown",
    email: "charlie@ufl.edu",
    major: "Computer Science",
    year: "2028",
    graduating: "No",
    country: "USA",
    classes: ["COP3502C", "COT3100", "MAC2312", "FOS2001"],
    internships: [],
    confirmed: false, 
    permission: "member",
    listServ: false,
    photo: "charlie.jpg",
    ethnicity: "Hispanic",
    sex: "Male",
    points: 0,
    fallPoints: 0,
    springPoints: 0,
    summerPoints: 0,
    socialMedia: "",
    events: [],
    createdAt: "2023-03-01T00:00:00.000Z",
  },
];

const loadingMock = [
  {
    request: { query: FETCH_USERS_QUERY },
    result: { data: { getUsers: mockUsers } },
    delay: 99999, 
  },
];

const loadedMock = [
  {
    request: { query: FETCH_USERS_QUERY },
    result: { data: { getUsers: mockUsers } },
  },
];

describe("Members - Snapshot Tests", () => {
  test("matches snapshot in loading state", () => {
    const { asFragment } = render(
      <MockedProvider mocks={loadingMock} addTypename={false}>
        <Members />
      </MockedProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when data is loaded", async () => {
      const { asFragment } = render(
      <MockedProvider mocks={loadedMock} addTypename={false}>
          <Members />
      </MockedProvider>
      );
      await screen.findByTestId("members-table");
      expect(asFragment()).toMatchSnapshot();
  });
});

class Filter {
  constructor(filter) {
    this.name = filter.name;
    this.major = filter.major;
    this.year = filter.year;
    this.graduating = filter.graduating;
    this.country = filter.country;
    this.classes = filter.classes;
    this.internships = filter.internships;
  }
}

function applyFilter(users, filter) {
  return users.filter(function (user) {
    let fullName = user.firstName.concat(" ").concat(user.lastName);
    let allInternships = user.internships.toString();
    let allClasses = user.classes.toString();
    return (
      user.confirmed &&
      (filter.major.length === 0 ? true : filter.major.includes(user.major)) &&
      (filter.year.length === 0 ? true : filter.year.includes(user.year)) &&
      (filter.graduating.length === 0 ? true : filter.graduating.includes(user.graduating)) &&
      (filter.country.length === 0 ? true : filter.country.includes(user.country)) &&
      (filter.internships.length === 0
        ? true
        : filter.internships.map((n) => allInternships.toLowerCase().includes(n.toLowerCase())).includes(true)) &&
      (filter.classes.length === 0
        ? true
        : filter.classes.map((n) => allClasses.toLowerCase().includes(n.toLowerCase())).includes(true)) &&
      (filter.name.length === 0
        ? true
        : filter.name.map((n) => user.firstName.toLowerCase().includes(n.toLowerCase())).includes(true) ||
          filter.name.map((n) => user.lastName.toLowerCase().includes(n.toLowerCase())).includes(true) ||
          filter.name.map((n) => fullName.toLowerCase().includes(n.toLowerCase())).includes(true))
    );
  });
}

describe("Filter Logic Tests", () => {
  test("returns only confirmed users when no filters applied", () => {
    const filter = new Filter({ name: [], major: [], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(2); 
    result.forEach((user) => expect(user.confirmed).toBe(true));
  });

  test("filters by major", () => {
    const filter = new Filter({ name: [], major: ["Computer Science"], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1); 
    expect(result[0].firstName).toBe("Alice");
  });

  test("filters by year", () => {
    const filter = new Filter({ name: [], major: [], year: ["2027"], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alex");
  });

  test("filters by country", () => {
    const filter = new Filter({ name: [], major: [], year: [], graduating: [], country: ["Canada"], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alex");
  });

  test("filters by first name (case-insensitive)", () => {
    const filter = new Filter({ name: ["alice"], major: [], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  test("filters by last name (case-insensitive)", () => {
    const filter = new Filter({ name: ["JONES"], major: [], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].lastName).toBe("Jones");
  });

  test("filters by full name", () => {
    const filter = new Filter({ name: ["Alice Smith"], major: [], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  test("filters by internship (case-insensitive)", () => {
    const filter = new Filter({ name: [], major: [], year: [], graduating: [], country: [], classes: [], internships: ["google"] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  test("filters by class", () => {
    const filter = new Filter({ name: [], major: [], year: [], graduating: [], country: [], classes: ["PHY2048"], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alex");
  });

  test("returns empty array when no users match filter", () => {
    const filter = new Filter({ name: [], major: ["Physics"], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(0);
  });

  test("filters by graduating status", () => {
    const filter = new Filter({ name: [], major: [], year: [], graduating: ["Yes"], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  test("unconfirmed users are never shown regardless of filters", () => {
    const filter = new Filter({ name: ["Charlie"], major: [], year: [], graduating: [], country: [], classes: [], internships: [] });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(0); 
  });

  test("filters by multiple criteria simultaneously", () => {
    const filter = new Filter({ 
      name: [], major: ["Computer Science"], year: ["2026"], 
      graduating: [], country: ["USA"], classes: [], internships: [] 
    });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });

  test("returns multiple users when there is more than one name match", () => {
    const filter = new Filter({ 
      name: ["al"],
      major: [], year: [], graduating: [], country: [], classes: [], internships: [] 
    });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(2);
  });

  test("excludes users who do not have the filtered internship", () => {
    const filter = new Filter({ 
      name: [], major: [], year: [], graduating: [], 
      country: [], classes: [], internships: ["Google"] 
    });
    const result = applyFilter(mockUsers, filter);
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice"); 
  });
});

describe("Members - UI State Tests", () => {
  test("shows loader when loading", () => {
    render(
      <MockedProvider mocks={loadingMock} addTypename={false}>
        <Members />
      </MockedProvider>
    );
    expect(screen.getByText(/loading users, please wait/i)).toBeInTheDocument();
  });

  test("shows MembersTable after data loads", async () => {
    render(
      <MockedProvider mocks={loadedMock} addTypename={false}>
        <Members />
      </MockedProvider>
    );
    const table = await screen.findByTestId("members-table");
    expect(table).toBeInTheDocument();
  });
});
