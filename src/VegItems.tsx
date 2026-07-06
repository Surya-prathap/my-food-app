
import "./VegItems.css";
import { PiCarrotBold } from "react-icons/pi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

interface VegItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

function VegItems() {
  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Brinjal",
      imageUrl: "images/veg/brinjal.png",
      price: 30,
      description: "Fresh and healthy brinjals directly from farms."
    },
    {
      id: 2,
      name: "Cabbage",
      imageUrl: "images/veg/cabbage.png",
      price: 35,
      description: "Crispy and fresh cabbage rich in nutrients."
    },
    {
      id: 3,
      name: "Capsicum",
      imageUrl: "images/veg/capsicum.png",
      price: 50,
      description: "Premium quality capsicum with rich flavor."
    },
    {
      id: 4,
      name: "Carrot",
      imageUrl: "images/veg/carrot.webp",
      price: 40,
      description: "Sweet and juicy carrots full of vitamins."
    },
    {
      id: 5,
      name: "Cauliflower",
      imageUrl: "images/veg/cauliflower.webp",
      price: 45,
      description: "Farm fresh cauliflower for healthy meals."
    },
    {
      id: 6,
      name: "Cucumber",
      imageUrl: "images/veg/cucumber.png",
      price: 30,
      description: "Fresh cucumbers perfect for salads and snacks."
    },
    {
      id: 7,
      name: "Onion",
      imageUrl: "images/veg/onion.webp",
      price: 32,
      description: "Premium onions with rich taste and freshness."
    },
    {
      id: 8,
      name: "Potato",
      imageUrl: "images/veg/potato.png",
      price: 28,
      description: "Fresh potatoes suitable for all dishes."
    },
    {
      id: 9,
      name: "Spinach",
      imageUrl: "images/veg/spinach.png",
      price: 25,
      description: "Nutritious spinach packed with iron and minerals."
    },
    {
      id: 10,
      name: "Tomato",
      imageUrl: "images/veg/tomato.png",
      price: 38,
      description: "Fresh red tomatoes with natural sweetness."
    }
  ];

  interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

interface EmployeeResponse {
  status: string;
  data: Employee;
  message: string;
}

const [employeeResponse, setEmployeeResponse] =
  useState<EmployeeResponse | null>(null);

useEffect(() => {
  fetch("https://dummy.restapiexample.com/api/v1/employee/2")
    .then((response) => response.json())
    .then((employeeResponse: EmployeeResponse) => {
      setEmployeeResponse(employeeResponse);
    });
}, []);

  return (
    <div className="veg-page">
      <h1 className="veg-heading"><PiCarrotBold className="veg-heading-icon"/> Fresh Vegetables</h1>

       <div>
      <h1>Employee Details</h1>

      {employeeResponse && (
        // <div>
        //   <h2>status:{employeeResponse?.status}</h2>
        //   <h2>{employeeResponse?.data.employee_name}</h2>
        //   <p>ID: {employeeResponse?.data.id}</p>
        //   <p>Salary: {employeeResponse?.data.employee_salary}</p>
        //   <p>Age: {employeeResponse?.data.employee_age}</p>
        //   <p>message: {employeeResponse?.message}</p>
        // </div>

        <div className="max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md border p-6">
  <h2 className="text-green-600 font-semibold mb-4">
    {employeeResponse?.status}
  </h2>

  <h1 className="text-2xl font-bold text-gray-800 mb-6">
    {employeeResponse?.data.employee_name}
  </h1>

  <div className="space-y-3">
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">Employee ID</span>
      <span className="font-medium">{employeeResponse?.data.id}</span>
    </div>

    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">Salary</span>
      <span className="font-medium">
        ₹{employeeResponse?.data.employee_salary}
      </span>
    </div>

    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">Age</span>
      <span className="font-medium">
        {employeeResponse?.data.employee_age}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Message</span>
      <span className="font-medium">{employeeResponse?.message}</span>
    </div>
  </div>
</div>
      )}
    </div>

      <ul className="veg-container">
        {vegItems.map((veg) => (
          <li key={veg.id} className="veg-card">
            <img
              src={veg.imageUrl}
              alt={veg.name}
              className="veg-image"
            />

            <h3 className="veg-name">{veg.name}</h3>

            <p className="veg-description">
              {veg.description}
            </p>

            <div className="veg-footer">
              <span className="veg-price">
                ₹{veg.price}/kg
              </span>

              <button className="buy-btn" onClick={() => toast.success(`${veg.name} added to cart successfully!`)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VegItems;