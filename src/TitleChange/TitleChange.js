import { useEffect } from "react"




const TitleChange = title =>{

useEffect(()=>{



    document.title = `${title} - Booking-App`
}



,[title])
}

export default TitleChange