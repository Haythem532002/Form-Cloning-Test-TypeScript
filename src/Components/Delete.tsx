import React, { useState } from "react";
import Box from "./Box";
import Title from "./Title";
import { CgDanger } from "react-icons/cg";
import Item from "./Item";
import Button from "./Button";

const Delete = () => {
  const [reason, setReason] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  return (
    <Box>
      <Title text="Delete Your Account" />
      <p className="mb-5">
        We're sorry to see you go. It would be great if we could know the reason
        behind.
      </p>
      {reason === "" && (
        <div className="flex items-center mb-3">
          <CgDanger fontSize={20} color="red" />
          <p className="ml-2 text-[#ff0000] font-bold">
            Please select one of the below reasons.
          </p>
        </div>
      )}
      <div className="ml-2">
        <Item
          checked={reason === "I have privacy concerns."}
          onClick={() => setReason("I have privacy concerns.")}
          text="I have privacy concerns."
        />
        <Item
          checked={reason === "I no longer find this useful."}
          onClick={() => setReason("I no longer find this useful.")}
          text="I no longer find this useful."
        />
        <Item
          checked={reason === "I'm receiving irrelevant email contents."}
          onClick={() => setReason("I'm receiving irrelevant email contents.")}
          text="I'm receiving irrelevant email contents."
        />
        <Item
          checked={reason === "I'm getting too many emails."}
          onClick={() => setReason("I'm getting too many emails.")}
          text="I'm getting too many emails."
        />
        <Item
          checked={reason === "Others"}
          onClick={() => setReason("Others")}
          text="Others"
        />
      </div>
      <div className="mt-6 mb-5">
        <p className="mb-3">Let us know if you've other comments</p>
        <textarea
          className="px-3 py-2 rounded-lg w-full border-2 focus:outline-none"
          rows={7}
          placeholder="Your Comments(Optional)"
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setComment(e.target.value)
          }
        ></textarea>
        <p className="flex justify-end text-[#AAAAAA]">Max 2000 characters</p>
      </div>
      <Button
        text="Submit"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          if (reason === "") {
            alert("Please Select One Reason");
            e.preventDefault();
          } else {
            alert("Thank you for your help");
          }
        }}
      />
    </Box>
  );
};

export default Delete;
