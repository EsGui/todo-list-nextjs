import HomeFooter from "./components/home_components/HomeFooter";
import HomeHeader from "./components/home_components/HomeHeader";
import HomeTasks from "./components/home_components/HomeTasks";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeTasks />
      <HomeFooter />
    </main>
  )
}
