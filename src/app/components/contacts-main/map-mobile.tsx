import Image from 'next/image';
import { Box } from "@mui/material";
import { clr } from "../../colors";

export default function MapMobile() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          border: `3px solid ${clr.light}`,
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            transform: `matrix(0.75, 0, 0, 0.75, 0, 70)`,
            backfaceVisibility: 'hidden',
            width: '2442px',
            height: '1074px',
          }}
        >
          <Image
            src="/images/contacts/map.jpg"
            alt="map"
            width={2442}
            height={1075}
          />
        </Box>
      </Box>
    </>
  )
}
