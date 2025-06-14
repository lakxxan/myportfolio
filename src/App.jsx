import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import './App.css'

function App() {
  // Navigation items
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
  ];

  // Skills data
  const skills = [
    { title: "Front-End", experience: "60+ Hours Experience" },
    { title: "Python", experience: "1 Years Experience" },
    { title: "Cybersecurity", experience: "120+ Hours Experience" },
  ];

  // Projects data with links
  const projects = [
    { 
      title: "Automated Marketing Management System", 
      href: "https://github.com/lakxxan/Automated-Marketing-Management-System",
      className: "font-space-grotesk font-bold text-white text-[53px] text-center leading-[48px]"
    },
    { 
      title: "Smart Canteen", 
      href: "https://github.com/lakxxan/Smart-Canteen",
      className: "font-space-grotesk font-bold text-white text-[70px] text-center leading-[61px]"
    },
  ];

  return (
    <div className="bg-[#211f1f] flex flex-row justify-center w-full">
      <div className="bg-[#211f1f] w-full max-w-[1440px] relative">
        <header className="flex justify-between items-center px-16 pt-12 pb-8">
          <h1 className="font-inter font-bold text-white text-[32px] leading-normal">
            Lakshan
            <br />
            Rathnayake
          </h1>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className="font-poppins font-normal text-white text-[27px] leading-normal hover:text-[#a6bbcc] transition-colors"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="https://github.com/lakxxan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <GithubIcon className="w-[68px] h-[63px] text-white hover:text-[#a6bbcc] transition-colors" />
          </a>
        </header>

        <section className="flex justify-between items-center px-24 mt-16">
          <div className="space-y-8">
            <div>
              <p className="font-poppins font-medium text-white text-[28px] leading-normal">
                Hello, I&apos;m Lakshan,
              </p>
              <h2 className="font-poppins font-extrabold text-[#a6bbcc] text-[100px] leading-[116px]">
                Cyber <br />
                Security
              </h2>
            </div>

            <div className="relative w-[169px] group cursor-pointer">
              <p className="font-poppins font-extrabold text-white text-[26px] leading-[116px] whitespace-nowrap group-hover:text-[#a6bbcc] transition-colors">
                Contact Me
              </p>
              <Separator className="bg-white h-1 w-[150px] absolute bottom-10 group-hover:bg-[#a6bbcc] transition-colors" />
            </div>
          </div>

          <div className="relative">
            <img
              className="w-[552px] h-[736px] object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
              alt="Lakshan Rathnayake profile"
              src="/whatsapp-image-2025-01-31-at-15-02-47-65b6c258-1.png"
            />
          </div>
        </section>

        <section id="about" className="px-24 mt-32">
          <h2 className="font-poppins font-extrabold text-[#a6bbcc] text-[75px] leading-[116px]">
            About
          </h2>
          <Separator className="bg-white h-1 w-full mt-4 mb-12" />

          <p className="font-poppins font-normal text-white text-2xl leading-[44px] mb-16">
            I&apos;m an undergraduate student at NDT University of Moratuwa,
            studying Information Technology. I love learning about cybersecurity
            and want to make a difference in this field someday. I&apos;m
            involved in activities in this field, which helps me grow and work
            well with others. I&apos;m excited to meet new people and take on
            new challenges!
          </p>

          <div className="flex justify-between items-center mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <h3 className="font-space-grotesk font-bold text-white text-[48px] leading-[56px] mb-4 group-hover:text-[#a6bbcc] transition-colors">
                  {skill.title}
                </h3>
                <div className="relative">
                  <p className="font-space-grotesk text-grey text-[18px] text-center mb-4">
                    {skill.experience}
                  </p>
                  <Separator className="bg-[#a6bbcc] h-1 w-48 mx-auto group-hover:bg-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="px-24 mt-16">
          <h2 className="font-poppins font-extrabold text-[#a6bbcc] text-[75px] leading-[116px]">
            work
          </h2>
          <Separator className="bg-white h-1 w-full mt-4 mb-12" />

          <p className="font-poppins font-normal text-white text-2xl leading-[44px] mb-16">
            I have developed practical experience through hands-on projects that
            demonstrate my technical capabilities and problem-solving skills. My
            work focuses on creating innovative solutions that address
            real-world challenges
          </p>

          <div className="flex justify-between items-center mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="bg-transparent border-none group">
                <CardContent className="p-0">
                  <a 
                    href={project.href}
                    className={`${project.className} group-hover:text-[#a6bbcc] transition-colors duration-300 hover:underline decoration-[#a6bbcc] underline-offset-8 decoration-2 block`}
                  >
                    {project.title.includes('Management') ? (
                      <>
                        Automated Marketing <br />
                        Management System
                      </>
                    ) : (
                      project.title
                    )}
                  </a>
                  <Separator className="bg-[#a6bbcc] h-1 w-[424px] mx-auto mt-12 group-hover:bg-white transition-colors" 
                    style={index === 1 ? { width: '12rem' } : {}} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="px-24 mt-16">
          <h2 className="font-poppins font-extrabold text-[#a6bbcc] text-[75px] leading-[116px]">
            Contact Me
          </h2>
          <Separator className="bg-white h-1 w-full mt-4 mb-12" />

          <div className="max-w-3xl mx-auto">
            <p className="font-space-grotesk font-medium text-grey text-2xl leading-7 mb-16">
              I would love to hear about your project and how I can help. Please
              fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form className="space-y-12">
              <div className="relative">
                <label className="absolute top-3 left-0 opacity-50 font-space-grotesk font-medium text-white text-base tracking-[-0.22px] leading-[26px]">
                  NAME
                </label>
                <Input className="border-0 border-b border-white rounded-none bg-transparent h-[74px] pt-8 pb-0 px-0 focus-visible:ring-0 focus-visible:border-[#a6bbcc] transition-colors" />
              </div>

              <div className="relative">
                <label className="absolute top-0 left-0 opacity-50 font-space-grotesk font-medium text-white text-base tracking-[-0.22px] leading-[26px]">
                  EMAIL
                </label>
                <Input className="border-0 border-b border-white rounded-none bg-transparent h-[74px] pt-8 pb-0 px-0 focus-visible:ring-0 focus-visible:border-[#a6bbcc] transition-colors" />
              </div>

              <div className="relative">
                <label className="absolute top-4 left-0 opacity-50 font-space-grotesk font-medium text-white text-base tracking-[-0.22px] leading-[26px]">
                  MESSAGE
                </label>
                <Textarea className="border-0 border-b border-white rounded-none bg-transparent min-h-[188px] pt-12 pb-0 px-0 focus-visible:ring-0 focus-visible:border-[#a6bbcc] transition-colors" />
              </div>

              <div className="flex justify-center">
                <Button className="bg-transparent hover:bg-[#a6bbcc] hover:text-[#211f1f] border-0 border-b-2 border-[#a6bbcc] rounded-none px-12 py-4 font-space-grotesk font-bold text-white text-base tracking-[2.29px] leading-[26px] transition-all duration-300">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </section>

        <footer className="flex justify-between items-center px-16 py-12 mt-16">
          <h1 className="font-inter font-bold text-white text-[32px] leading-normal">
            Lakshan
            <br />
            Rathnayake
          </h1>

          <div className="flex gap-4">
            <a
              href="https://facebook.com/lakxxan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FacebookIcon className="w-[74px] h-[74px] text-white hover:text-[#a6bbcc] transition-colors" />
            </a>
            <a
              href="https://instagram.com/lakxxan_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <InstagramIcon className="w-[63px] h-[63px] text-white hover:text-[#a6bbcc] transition-colors" />
            </a>
            <a
              href="https://github.com/lakxxan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <GithubIcon className="w-[68px] h-[63px] text-white hover:text-[#a6bbcc] transition-colors" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
