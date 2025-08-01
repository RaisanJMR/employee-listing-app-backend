import { connectDB } from './mongoose.js';
import Employee from './models/Employee.js';

const employees = [
    { name: 'Alice', position: 'Engineer', department: 'Tech', salary: 90000 },
    { name: 'Bob', position: 'Designer', department: 'Design', salary: 70000 },
    { name: 'Carol', position: 'HR Manager', department: 'HR', salary: 80000 },
    { name: 'David', position: 'Tech Lead', department: 'Tech', salary: 120000 },
    { name: 'Eve', position: 'Recruiter', department: 'HR', salary: 75000 },
];

const run = async () => {
    await connectDB();
    await Employee.deleteMany({});
    await Employee.insertMany(employees);
    console.log('✅ Seeded database using Mongoose');
    process.exit();
};

run();
