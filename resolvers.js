import mongoose from 'mongoose';
import Employee from './models/Employee.js';

export default {
  Query: {
    getAllEmployees: async () =>
      await Employee.find({}, 'name position department salary'),

    getEmployeeDetails: async (_, { id }) => {
      if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid ID');
      return await Employee.findById(id);
    },

    getEmployeesByDepartment: async (_, { department }) =>
      await Employee.find({ department }),
  },

  Mutation: {
    addEmployee: async (_, { input }) => {
      const { name, position, department, salary } = input;
      const newEmp = new Employee({ name, position, department, salary });
      return await newEmp.save();
    },
  },

  Employee: {
    id: (parent) => parent._id?.toString(), 
  },
};
