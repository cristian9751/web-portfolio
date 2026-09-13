import AboutMe from "./components/AboutMe"
import Layout from "./components/Layout"
import MyProjects from "@/components/MyProjects.tsx"
import ContactMe from "@/components/ContactMe.tsx"


export function App() {
  return (
    <Layout>
      <MyProjects></MyProjects>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </Layout>
  )
}

export default App
