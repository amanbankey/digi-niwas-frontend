import React from 'react'
import HeroSection from "./AgentCorner/HeroSection";
import AgentCRMWorkflow from "./AgentCorner/AgentCRM";
import PricingPlans from "./AgentCorner/PricingPlans";
import ValueProposition from "./AgentCorner/ValueProposition";
import JourneySection from "./AgentCorner/JourneySection";
import NetworkSection from "./AgentCorner/NetworkSection";

const AgentCorner = () => {

  return (
    <div>
        <HeroSection />

      <ValueProposition />

      <JourneySection />

      <AgentCRMWorkflow />

      <NetworkSection />

      <PricingPlans />
    </div>
  )
}

export default AgentCorner