
import { Box } from "@mui/material";
import TitleServices from "./services/titleServices";
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";


export default function Services() {
  return(
    <>
      <TitleServices />

      <ServiceLeft 
        top={-50}  
        pright={10}
        title={'Фитнесс'}
        lineOne={'Каждой собаке необходимы физические нагрузки,'}
        lineTwo={'чтобы она была здоровой, активной и послушной'}
        image={''}
      />

      <ServiceRight 
        top={70}  
        pleft={10}
        title={'Хендлинг'}
        lineOne={'Подготовить собаку и выступить на дог-шоу, а также построить правильную карьеру'}
        lineTwo={'вам поможет профессиональный хендлер'}
        image={''}
      />

      <ServiceLeft 
        top={190}  
        pright={10}
        title={'Дрессировка'}
        lineOne={'Научим спокойно ходить на поводке, приходить по первому зову и носить тапочки,'}
        lineTwo={'поможем справиться с проблемами и воспитать щенка'}
        image={''}
      />

      <ServiceRight 
        top={310} 
        pleft={10}
        title={'Грумминг'}
        lineOne={'Комплекс по уходу за питомцем'}
        lineTwo={'(мойка и укладка шерсти, стрижка когтей и другие процедуры в зависимости от породы)'}
        image={''}
      />

      <ServiceLeft 
        top={430}  
        pright={10}
        title={'Массаж'}
        lineOne={'Массаж улучшает состояние связок и суставов, снимает напряжение,'}
        lineTwo={'улучшает кровообращение и работу пищеварительной системы'}
        image={''}
      />
      <ServiceRight 
        top={550} 
        pleft={10}
        title={'Фото-студия'}
        lineOne={'Экстерьерная и художественная фотосъемка, '}
        lineTwo={'фоторепортажи с выставки, фотосъемка щенков'}
        image={''}
      />

      <ServiceLeft 
        top={670}  
        pright={10}
        title={'Аренда'}
        lineOne={'Индивидуальная и групповая аренда,'}
        lineTwo={'проведение семинаров и мастер классов'}
        image={''}
      />

      <ServiceRight 
        top={790} 
        pleft={10}
        title={'Оформление документов'}
        lineOne={'Помощь в оформлении чемпионских дипломов и родословных'}
        lineTwo={''}
        image={''}
      /> 
    </>
  )
} 

/*
        <ServiceLeft top={-50}/>
      <ServiceRight top={70}/>

      <ServiceLeft top={190}/>
      <ServiceRight top={310}/>

      <ServiceLeft top={430}/>
      <ServiceRight top={550}/>

      <ServiceLeft top={670}/>
      <ServiceRight top={790}/>  
*/