'use client'
import Image from 'next/image'
import { useState } from 'react'
import { GalleryProps, MobileGallery } from './MobileGallery'

export const Gallery = ({ dictionary, images }: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{
    description: string
    original: string
  }>({ description: '', original: '' })

  const openModal = (image: { description: string; original: string }) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage({ description: '', original: '' })
  }

  return (
    <>
      <p className='mb-5'>{dictionary.photosSection.pl_gallery.description}</p>

      <p className='mb-5'>
        {dictionary.photosSection.pl_gallery.exif.focalLength}24mm |{' '}
        {dictionary.photosSection.pl_gallery.exif.aperture}f/4 |{' '}
        {dictionary.photosSection.pl_gallery.exif.exposureTime}20s
      </p>

      <div className='md:hidden'>
        <MobileGallery dictionary={dictionary} images={images} />
      </div>

      <div className='hidden md:grid grid-cols-2 justify-items-center lg:grid-cols-3 gap-5 lg:gap-8'>
        {images.map(({ description, original, blurDataURL }) => (
          <div
            key={description}
            className='min-w-[200px] max-w-[300px] lg:max-w-[500px] relative group'
            onClick={() => openModal({ description, original })}
          >
            <div className='relative cursor-pointer'>
              <Image
                alt={description}
                width={1614}
                height={1291}
                src={original}
                placeholder='blur'
                blurDataURL={blurDataURL}
                className='rounded-lg'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div className='p-4 text-center'>
                  <p className='text-sm lg:text-xs xl:text-sm'>
                    {
                      // @ts-ignore
                      dictionary.photosSection.pl_gallery[description]
                        .descriptionDesktop
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && Boolean(selectedImage.original) && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative bg-zinc-900 rounded-lg shadow-lg max-w-[800px] mx-auto p-8'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-stone-300 hover:text-gray-500 transition-colors duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <figure>
              <Image
                alt={selectedImage.description}
                width={1614}
                height={1291}
                src={selectedImage.original}
                className='rounded-lg'
              />
              <figcaption className='mt-4 text-center text-lg text-stone-300'>
                {
                  // @ts-ignore
                  dictionary.photosSection.pl_gallery[selectedImage.description]
                    .descriptionDesktop
                }
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  )
}
