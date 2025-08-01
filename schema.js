const typeDefs = `#graphql
  input AddEmployeeInput {
    name: String!
    position: String!
    department: String!
    salary: Float!
  }

  type Employee {
    id: ID!
    name: String!
    position: String!
    department: String!
    salary: Float!
  }

  type Query {
    getAllEmployees: [Employee!]!
    getEmployeeDetails(id: ID!): Employee
    getEmployeesByDepartment(department: String!): [Employee!]!
  }

  type Mutation {
    addEmployee(input: AddEmployeeInput!): Employee
  }
`;

export default typeDefs;
