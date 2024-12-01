import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

export default function LandingPage() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0  text-base" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}