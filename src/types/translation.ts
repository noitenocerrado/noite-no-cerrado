export interface TranslationProps {
  dictionary: {
    common: {
      contentToBeDefined: string
    }
    navMenu: {
      project: string
      photos: string
      data: string
      contact: string
      bgImageAlt: string
      logoImageAlt: string
      title: string
    }
    dataSection: {
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
      pl_gallery: {
        description: string
        exif: {
          focalLength: string
          aperture: string
          exposureTime: string
        }
        pl_panorama_stop1: {
          description: string
        }
        pl_panorama_stop2: {
          description: string
        }
        pl_panorama_stop3: {
          description: string
        }
        pl_panorama_stop4: {
          description: string
        }
      }
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
