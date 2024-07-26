import Header from "@/app/components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Users from "./components/Users";
import DidntMatch from "./components/DidntMatch";
import OrderPage from "./components/OrderPage";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Team />
      <Users />
      <DidntMatch />
      <OrderPage />
      <Subscribe />
    </main>
  );
}
