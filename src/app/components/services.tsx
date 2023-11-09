
import { Box } from "@mui/material";
import TitleServices from "./services/titleServices";
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";


export default function Services() {
  return(
    <>
      <TitleServices />

      <ServiceLeft top={-50}/>
      <ServiceRight top={70}/>

      <ServiceLeft top={190}/>
      <ServiceRight top={310}/>

      <ServiceLeft top={430}/>
      <ServiceRight top={550}/>

      <ServiceLeft top={670}/>
      <ServiceRight top={790}/>
    </>
  )
} 

/*
    
*/