interface ContactsUndergroundProps {
  isMobile: boolean;
}

export default function ContactsUnderground({ isMobile }:ContactsUndergroundProps) {
  return (
    <>
      {!isMobile && (
        <div 
        style={{ 
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%', 
            height: '500px', 
            background: `url('/images/underground/layer.webp')`,
            backgroundSize: '2000px 500px',
            bottom: '0',
          }}
        />
      )}

      {isMobile && (
        <div 
          style={{ 
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%', 
            height: '535px', 
            background: `url('/images/underground/mobile/layer.webp')`,
            backgroundSize: '900px 535px',
            bottom: '0',
          }}
        />
      )}
    </>
  )
}
