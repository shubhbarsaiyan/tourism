import React from 'react'
import Video from './Video'
import PlanYourTripCard from './PlanYourTripCard'
import Cards from './Cards';
import TravelNavBar from "./TravelNavBar";
import ReasonsToExplore from "./ReasonsToExplore";
import AIReviewFeedback from './AIReviewFeedback';
import TripPlanner from "./TripPlanner"; 
import Footer from './Footer'
// import AITripPlanner from './AITripPlanner';
// import ChatBot from './ChatBot'

const Home = () => {
  return (
    <>
      <Video />
      {/* <ChatBot /> */}

       {/* <AITripPlanner /> */}
       <TripPlanner /> 

      <TravelNavBar />
       
      <Cards />

      <ReasonsToExplore />

      <AIReviewFeedback />

      <div>
        <footer />

      </div>


      

      

    </>
  );
}

export default Home
