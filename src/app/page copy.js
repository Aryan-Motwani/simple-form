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
      // changeSubmit(true);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <main>
      <h1>Form</h1>
      Form
      <form>
        {submit == true ? (
          <Cardd />
        ) : (
          <div>
            <h2>Name</h2>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name"
              type="text"
            />
            <p></p>
            <h2>Number</h2>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Number"
              type="number"
            />
            <p></p>
            <h2>Number</h2>
            <p></p>
            <input
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="DOB"
              type="date"
            />
            <p></p>
            <button onClick={submitForm}>Submit</button>
          </div>
        )}
      </form>
    </main>
  );
}
