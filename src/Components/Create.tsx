import React, { useState } from "react";
import Box from "./Box";
import Title from "./Title";
import { CgDanger } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email("Invalid Email Format"),
  password: z.string().min(6, "Password must be at least 6 characters").trim(),
  experience: z.number().default(0),
});

type User = z.infer<typeof UserSchema>;

const Create = () => {
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
    experience: 0,
  });
  const [errors, setErros] = useState<z.ZodIssue[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = UserSchema.safeParse(formData);
    if (result.success) {
      alert("Form Submitted Succesfully");
      setErros([]);
    } else {
      console.log("Validation errors:" + result.error.errors);
      setErros(result.error.errors);
    }
  };
  const [remember, setRemeber] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Box>
      <Title text="Create Account" />
      <p className="w-full text-center mb-5">
        Create your account in a second to receive our latest news!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label className="font-bold" htmlFor="email">
              Email
            </label>
          </div>
          <div className="border-2 rounded-lg w-full mt-2 mb-2">
            <input
              className="pl-3 py-2 w-full rounded-lg focus:outline-none"
              id="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="text-[#ff0000] mb-2">
            {errors.find((error) => error.path.includes("email"))?.message}
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <p className="text-[#AAAAAA]">At Least 6 characters</p>
          </div>
          <div className="relative rounded-lg w-full mt-2 mb-2">
            <input
              className={`border-2 pl-3 py-2 w-full rounded-lg border-[${
                formData.password.length < 6 && formData.password.length > 0
                  ? "#ff0000"
                  : ""
              }] focus:outline-none`}
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newPassword = e.target.value;
                setFormData((prevState) => ({
                  ...prevState,
                  password: newPassword,
                }));
                if (newPassword.length >= 6) {
                  setVisible(false);
                } else {
                  setVisible(true);
                }
              }}
              onFocus={(): void => {
                if (formData.password.length < 6) {
                  setVisible(true);
                }
              }}
            />
          </div>
          {visible && (
            <div className="flex items-center mb-3">
              <CgDanger color="red" fontSize={20} />
              <p className="ml-1 text-[#ff0000] font-bold">
                Error Message.{" "}
                <a
                  onClick={(): void =>
                    alert("Password need to have 6 characters")
                  }
                  className="font-normal underline"
                  href="#more"
                >
                  Learn More
                </a>
              </p>
            </div>
          )}
          <div className="text-[#ff0000] mb-2">
            {errors.find((error) => error.path.includes("password"))?.message}
          </div>
        </div>
        <div>
          <div>
            <label className="font-bold" htmlFor="experience">
              Year of experience
            </label>
          </div>
          <div className="border-2 rounded-lg w-full mt-2 mb-5 ">
            <select
              className="px-3 py-2 w-full rounded-lg"
              name="select"
              id="experience"
              value={formData.experience}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormData((prevState) => ({
                  ...prevState,
                  experience: Number(e.target.value),
                }))
              }
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <button
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
              setRemeber((prevState) => !prevState);
            }}
            className={`border-2 p-1 rounded-lg mr-3 bg-${
              remember && "primary"
            }`}
          >
            <FaCheck color="white" />
          </button>
          <label>Remember Me</label>
        </div>
        <Button text="Create Account" />
      </form>
    </Box>
  );
};

export default Create;
