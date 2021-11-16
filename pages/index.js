import Header from "../components/index/Header"

import { faArrowCircleUp, faAddressCard, faListAlt, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import Plancard from "../components/index/plancard";
import { Footer } from "../components/index/Footer";
import { Planes } from "../components/index/Planes";
import { Caracteristicas } from "../components/index/Caracteristicas";

const Index = () => {


  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {

    if (window.scrollY > 500) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);



  }, [])


  return (

    <div className=" bg-black">


      <a href="#inicio" className={isVisable ? "fixed m-6 right-0 bottom-0 z-30 transition-all duration-500 opacity-100" : "hidden m-6 right-0 bottom-0 z-50 transition-all opacity-0"}>

        <FontAwesomeIcon icon={faArrowCircleUp} size="3x" className="text-gray-400 opacity-70 " />

      </a>

      <Header />

      <Caracteristicas />

      <Planes />

      <Footer />

    </div>

  )
}




export default Index


