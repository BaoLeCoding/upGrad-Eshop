import React, { Fragment } from 'react'
import { Box, Button, Stepper, Step, StepLabel, Typography, Container } from '@mui/material'
import { useState } from 'react'
import ItemSummary from '../components/OrderPageItemSummary/ItemSummary';
import { connect } from 'react-redux'
import AddressForm from '../components/OrderPageAddressForm/AddressForm';

const steps = ['Items', 'Select Address', 'Confirm Order'];
const OrderPage = ({ orderQuantity, product }) => {
   const [activeStep, setActiveStep] = React.useState(0);
   const [skipped, setSkipped] = React.useState(new Set());

   const isStepOptional = (step) => {
      // All steps are mandatory in this case
      return false;
   };

   const isStepSkipped = (step) => {
      return skipped.has(step);
   };

   const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
         newSkipped = new Set(newSkipped.values());
         newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
         // You probably want to guard against something like this,
         // it should never occur unless someone's actively trying to break something.
         throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values());
         newSkipped.add(activeStep);
         return newSkipped;
      });
   };

   const handleReset = () => {
      setActiveStep(0);
   };

   return (
      <Fragment>
         <Container>
            <Stepper activeStep={activeStep}>
               {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                     labelProps.optional = (
                        <Typography variant="caption">Optional</Typography>
                     );
                  }
                  if (isStepSkipped(index)) {
                     stepProps.completed = false;
                  }
                  return (
                     <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                     </Step>
                  );
               })}
            </Stepper>
            {activeStep === steps.length ? (
               <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                     All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Box sx={{ flex: '1 1 auto' }} />
                     <Button onClick={handleReset}>Reset</Button>
                  </Box>
               </React.Fragment>
            ) : (
               <React.Fragment>
                  {/* Step content */}
                  <Typography sx={{ mt: 2, mb: 1 }}>Current step: {activeStep + 1}</Typography>
                  {activeStep === 0 && <ItemSummary />}
                  {activeStep === 1 && <AddressForm />}
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                     >
                        Back
                     </Button>
                     <Box sx={{ flex: '1 1 auto' }} />
                     {isStepOptional(activeStep) && (
                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                           Skip
                        </Button>
                     )}

                     <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                     </Button>
                  </Box>
               </React.Fragment>
            )}
         </Container>
      </Fragment>
   )
}

const mapStateToProps = (state) => ({
   orderQuantity: state.orderPage.orderQuantity,
   product: state.orderPage.product
})
// const mapDispatchToProps = {
//    return 
// }
export default connect(mapStateToProps)(OrderPage)