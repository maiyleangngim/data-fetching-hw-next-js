

"use client";

import { Modal } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

import { useState } from "react";

export function CreateProductModalComponent() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)} className="p-8">
        <form className="flex max-w-md flex-col gap-4 m-8">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
      </Modal>
    </>
  );
}
