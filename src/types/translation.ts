export interface TranslationProps {
  dictionary: {
    navMenu: {
      project: string
      photos: string
      data: string
      contact: string
      bgImageAlt: string
      logoImageAlt: string
      title: string
    }
    projectSection: {
      title: string
      subtitle: string
      content: {
        paragraph1: string
        paragraph2: string
      }
      accordion: {
        lightPollutionTitle: string
        lightPollutionContent: {
          paragraph1: string
          paragraph2: string
          paragraph3: string
        }
        impactTitle: string
        impactContent: {
          paragraph1: string
          reduceTitle: string
          reduceContent: string
          listItems: string[]
        }
        worldHeritageTitle: string
        worldHeritageContent: string
      }
    }
    photosSection: {
      title: string
    }
    aboutUs: {
      title: string
      collaborator1: {
        description: string
      }
      collaborator2: {
        description: string
      }
    }
    footer: {
      copyright: string
      developedBy: string
      contribution: string
    }
  }
}
