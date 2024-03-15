"use client";
import { useState } from "react";
import { client } from "../../sanity/sanity";
import Card from "./Card";
import ScratchCardComp from "./ScratchCardComp";
import Reward from "./Card";
import Cardd from "./Cardd";

async function getData() {
  const data = await client.fetch(`*[_type == "user"]`);
  console.log(data);
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [submit, changeSubmit] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("running submit form");
    try {
      // Create a new user
      const newUser = {
        _type: "user",
        username,
        number: +number,
        dob,
      };

      // Save the new user to Sanity
      await client.create(newUser);
      console.log("user added");
      changeSubmit(true);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <main>
      <h1>Form</h1>

      <form class="max-w-sm mx-auto" onSubmit={submitForm}>
        {submit == true ? (
          <Cardd />
        ) : (
          <div>
            <div class="mb-5">
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
              />
            </div>
            <div class="mb-5">
              <label
                for="dob"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Number
              </label>
              <input
                type="number"
                id="password"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </main>
  );
}
