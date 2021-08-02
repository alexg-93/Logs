import React from 'react'
import EditTechModal from '../components/techs/EditTechModal';
import TechCard from '../components/techs/TechCard';
import SideNav from '../components/layout/SideNav'
import SearchBar from '../components/layout/SearchBar'
import Logs from '../components/logs/Logs'
import AddBtn from '../components/layout/AddBtn'
import AddLogModal from '../components/logs/AddLogModal'
import EditLogModal from '../components/logs/EditLogModal'
import AddTechModal from '../components/techs/AddTechModal'
import TechListModal from '../components/techs/TechListModal';
import MobileNav from '../components/layout/MobileNav'


const Home = () => {


    return (
        <>
        <div >
        <MobileNav/>
        <SearchBar/>
      
      </div>
      <SideNav/>
         <div className="container">
          <AddBtn/>
          <AddLogModal/>
           <EditLogModal/>
           <AddTechModal/>
           <TechListModal/>
           <EditTechModal/>
           <TechCard/>
          <Logs/>
         </div>
       </>
    )
}

export default Home
