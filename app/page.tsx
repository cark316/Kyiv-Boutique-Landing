import Image from 'next/image'

export default function Home() {
  const sectionContainer = 'flex flex-row'
  const leftContainer = 'flex justify-center items-center h-[960px] w-[960px] border border-slate-600'
  const rightContainer = 'flex flex-stretch justify-center items-center h-[960px] w-[960px]'
  const brandContainer = 'flex flex-col m-[80px] mt-[112px]'
  const brandText = 'flex flex-row text-[96px] font-bold leading-[104px] border-b-2 border-slate-600'
  const brandImage = 'flex flex-row justify-center items-center mt-[24px]'
  const freshFlower = 'flex justify-center items-center flex-col h-[960px]'
  const freshText = 'flex flex-1 flex-col justify-center items-center h-[480px] w-[480px] text-[48px] border border-slate-600'
  const freshImage = 'flex flex-1 justify-center items-center h-[480px] w-[480px]'
  const driedFlower = 'flex justify-center items-center flex-col h-[960px]'
  const driedText = 'flex flex-1 justify-center items-center h-[480px] w-[480px] text-[48px] border border-slate-600'
  const driedImage = 'flex  flex-1 justify-center items-center h-[480px] w-[480px]'

  return (
    <main>
      <section className={sectionContainer}>
        <section className={leftContainer}>
          <div className={brandContainer}>
            <div className={brandText}>
              <ul>
                <li>
                  Kyiv
                </li>
                <li className='pb-[32px]'>
                  LuxeBouquet
                </li>
                <li className='text-[24px] font-normal leading-[40px] mb-[64px]'>
                  Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service
                </li>
              </ul>
            </div>
            <div className={brandImage}>
              <div className='mr-[24px] pr-[36px] border-r-2 border-slate-600'>
                <Image src='/Hero.jpg' alt='hero' height={392} width={392} />
              </div>
              <div className='flex text-[20px] h-[392px] w-[392px] pt-[248px]'>
                Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.
              </div>
            </div>
          </div>
        </section>
        <section className={rightContainer}>
          <div className={freshFlower}>
            <div className={freshText}>
              <div className='absolute'>
                Fresh Flowers
              </div>
              <div className='flex flex-row justify-center items-center mt-[376px] text-[24px] font-semibold'>
                Shop now 
                <Image className='ml-[8px]' src='/Arrow.svg' alt='arrow' height={20} width={26} />
              </div>
            </div>
            <div className={driedImage}>
              <Image className='border border-slate-600' src='/DriedFlower.jpg' alt='freshFlower' height={480} width={480} />
            </div>
          </div>
          <div className={driedFlower}>
            <div className={freshImage}>
              <Image className='border border-slate-600 border-r-2' src='/FreshFlower.jpg' alt='freshFlower' height={480} width={480} />
            </div>
            <div className={driedText}>
              <div className='absolute'>
                  Dried Flowers
              </div>
              <div className='flex flex-row justify-center items-center mt-[376px] text-[24px] font-semibold'>
                <Image className='mr-[8px] rotate-180' src='/Arrow.svg' alt='arrow' height={20} width={26} />
                  Shop now
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
