import vcrewImage from "@/assets/vcrew.png"
import ProjectImage from "@/components/ProjectImage.tsx"
import velourImage from "@/assets/velour.png"



export default function MyProjects() {
  return <>
    <section id="projects" className={"mx-auto w-full bg-card max-w-7xl flex flex-col  md:p-20 rounded-xl"}>
      <div className={"flex flex-col"}>
        <p className={"mx-auto text-4xl"}> Some of my work</p>
        <h5 className={" mx-auto "}>Working in modern web applications</h5>
      </div>
      <div className={"mx-auto flex flex-col py-2 md:py-10"}>
        <div className={"flex flex-col md:flex-row md:justify-between items-center"}>
          <a href={"https://vcrew-center.com"}>
            <ProjectImage highContrast={false}>
              <img className={"md:w-189"} src={vcrewImage} rel="noopener noreferrer" />
            </ProjectImage>
          </a>
          <p className={"p-10 text-3xl text-center"}> Applications with hundreds of users</p>
        </div>
        <div className={"flex flex-col md:flex-row w-full md:justify-between items-center"}>
          <p className={"text-center text-3xl order-2 md:order-1"}>E-comerce web applications</p>
          <a className={"order-1 md:order-2"} href={"https://velouramsterdam.com"}>
            <ProjectImage highContrast={false }>
              <img className={"md:w-189"} src={velourImage} />
            </ProjectImage>
          </a>
        </div>
      </div>
    </section>
  </>
}