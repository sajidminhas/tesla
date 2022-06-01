import React from 'react'
import styledComponents from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back garantee"
                backgroundImg="solar-panel.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Then Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                liftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                liftBtnText="Shop Now"
                
            />
        </Container>
    )
}

export default Home

const Container = styledComponents.div`
height: 100vh;
`
