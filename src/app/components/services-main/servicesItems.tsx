import ServicesItem from "./servicesItem"

interface ServicesItemsProps {
  setCurrentBillboardContent: any;
}

export default function ServicesItems({ setCurrentBillboardContent }: ServicesItemsProps) {

  return(
    <>
      <ServicesItem 
        src={'/images/services/documents.png'}
        alt={'documents'}
        left={'40%'}
        top={'65%'}
        zIndex={'10'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/fitnes.png'}
        alt={'fitnes'}
        left={'5%'}
        top={'0%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/grooming.png'}
        alt={'grooming'}
        left={'35%'}
        top={'5%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/handling.png'}
        alt={'handling'}
        left={'10%'}
        top={'60%'}
        zIndex={'11'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/massage.png'}
        alt={'massage'}
        left={'50%'}
        top={'25%'}
        zIndex={'10'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/photosession.png'}
        alt={'photosession'}
        left={'20%'}
        top={'35%'}
        zIndex={'10'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/rent.png'}
        alt={'rent'}
        left={'65%'}
        top={'50%'}
        zIndex={'11'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/training.png'}
        alt={'training'}
        left={'70%'}
        top={'15%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />
    </>
  )
} 