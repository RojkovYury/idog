
import { Box } from "@mui/material";
import TitleServices from "./services/titleServices";
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";


export default function Services() {
  return(
    <>
      <TitleServices />

      <ServiceLeft top={-50}/>

    </>
  )
} 

/*
    <ServiceRight top={100}/>
*/