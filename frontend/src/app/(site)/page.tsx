
import Footer from "./(_components)/Footer";
import Banner from "./(_components)/Banner";
import Categories from "./(_components)/Categories";
import Products from "./(_components)/Products";

export default async function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <Products />
      <Footer />
    </main>
  )
}
