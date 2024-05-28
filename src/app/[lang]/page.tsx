'use client'

import { Logo, NavMenu } from "@/components";
import { ProjectSection } from "@/components/organisms";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('O Projeto')

  const handleClickMenuItem = (title: string) => {
    setActiveSection(title)
  }

  let SectionComponent = <></>

  if (activeSection === 'O Projeto') {
    SectionComponent = <ProjectSection />
  } else if (activeSection === 'Fotos') {
    SectionComponent = <p>Fotos</p>
  }

  return (
    <main className="flex flex-col gap-5 bg-black text-white">
      <Logo />

      <NavMenu onClickItem={handleClickMenuItem} />

      {/* TODO: Adicionar as sections */}
      {SectionComponent}
    </main>
  );
}
