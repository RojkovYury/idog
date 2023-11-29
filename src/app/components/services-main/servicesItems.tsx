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
        bottom={'20%'}
        zIndex={'12'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/fitnes.png'}
        alt={'fitnes'}
        left={'5%'}
        bottom={'60%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/grooming.png'}
        alt={'grooming'}
        left={'50%'}
        bottom={'30%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/handling.png'}
        alt={'handling'}
        left={'10%'}
        bottom={'20%'}
        zIndex={'11'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/massage.png'}
        alt={'massage'}
        left={'50%'}
        bottom={'70%'}
        zIndex={'10'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/photosession.png'}
        alt={'photosession'}
        left={'20%'}
        bottom={'50%'}
        zIndex={'10'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/rent.png'}
        alt={'rent'}
        left={'65%'}
        bottom={'10%'}
        zIndex={'11'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />

      <ServicesItem 
        src={'/images/services/training.png'}
        alt={'training'}
        left={'50%'}
        bottom={'0%'}
        setCurrentBillboardContent={setCurrentBillboardContent}
      />
    </>
  )
} 