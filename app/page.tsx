import { redirect } from "next/navigation";
import { Navbar } from "./_components/landingPage/Navbar";
import { Hero } from "./_components/landingPage/Hero";
import { Logos } from "./_components/landingPage/Logos";
import { Features } from "./_components/landingPage/Features";
import { Testimonial } from "./_components/landingPage/Testimonial";
import { auth } from "./lib/auth";
import { CTA } from "./_components/landingPage/Cta";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonial />
      <CTA />
    </div>
  );
}
