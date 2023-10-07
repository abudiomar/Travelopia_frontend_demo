import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Book() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
<section className="relative mt-20 bg-black/50 px-4">
        <div className="container mx-auto">

          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex flex-wrap gap-8">
              <Input variant="outlined" type="text" size="lg" label="Full Name" />
              <Input variant="outlined" type="number" size="lg" label="Phone Number" />
              <Input variant="outlined" type="email" size="lg" label="Email Address" />
              <Input variant="outlined" type="date" size="lg" label="Appointment Date" />
            </div>
            <Button variant="gradient" size="lg" className="mt-8">
              Submit
            </Button>
          </form>
        </div>
      </section>
      </div>


      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">

          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Book;
