import React, { Fragment } from 'react'
import { Box, Button, Stepper, Step, StepLabel, Typography, Container } from '@mui/material'
import { useState } from 'react'
import ItemSummary from '../components/OrderPageItemSummary/ItemSummary';
import { connect } from 'react-redux'
import AddressForm from '../components/OrderPageAddressForm/AddressForm';
import { setStep2Valid } from '../store/actions/addressFormActions';
import OrderConfirmation from '../components/OrderPageOrderComfirmation/OrderConfirmation';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postRequestOrdering } from '../store/actions/orderPageActions';

const steps = ['Items', 'Select Address', 'Confirm Order'];
const OrderPage = ({ orderQuantity, product, deliveryAddress, step2valid, ordering_complete, ordering_error, onSetStep2Valid, onPostRequestOrdering }) => {
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
      //if this is step 2, then call specific handler
      let step2result = false;
      if (activeStep === 1) {
         step2result = handleNextStep2();
      }
      if (activeStep === 2) {
         handleNextStep3();
         return
      }
      if (activeStep !== 1) {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
         setSkipped(newSkipped);
      }
      if (activeStep === 1 && step2result) {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
         setSkipped(newSkipped)
      }
   };
   const handleNextStep2 = () => {
      console.log("handling Step 2,current state valid is", step2valid);
      if (!step2valid) {
         showErrorAdressToast();
         return false
      }
      return true
   }
   const handleNextStep3 = () => {
      let orderData = {
         "product": product.id,
         "quantity": orderQuantity,
         "address": deliveryAddress.addressId
      }
      console.log("OrderData", orderData)
      onPostRequestOrdering(orderData);
      if (ordering_complete) {
         showOrderCompleteToast();
      }
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      onSetStep2Valid(false);
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
   const showErrorAdressToast = () => {
      toast.error('PLease select address!', {
         position: toast.POSITION.TOP_RIGHT
      });
   };
   const showOrderCompleteToast = () => {
      toast.success('Order place successfully!', {
         position: toast.POSITION.TOP_RIGHT
      });
   };
   return (
      <Fragment>
         {/* {ordering_complete ? showOrderCompleteToast() : null} */}
         <ToastContainer />
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
            {/* {activeStep === steps.length ? (
               <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                     All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                     <Box sx={{ flex: '1 1 auto' }} />
                     <Button onClick={handleReset}>Reset</Button>
                  </Box>
               </React.Fragment>
            ) : ( */}
            <React.Fragment>
               {/* Step content */}
               <Typography sx={{ mt: 2, mb: 1 }}>Current step: {activeStep + 1}</Typography>

               {activeStep === 0 && <ItemSummary />}
               {activeStep === 1 && <AddressForm />}
               {activeStep === 2 && <OrderConfirmation />}
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
                  {activeStep != -1 ?
                     <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'PLACE ORDER' : 'Next'}
                     </Button>
                     : step2valid ? <Button onClick={handleNext}>Next</Button> :
                        <Button onClick={handleNext} disabled>Next</Button>
                  }
               </Box>
            </React.Fragment>
            {/* )} */}
         </Container>
      </Fragment>
   )
}

const mapStateToProps = (state) => ({
   orderQuantity: state.orderPage.orderQuantity,
   product: state.orderPage.product,
   deliveryAddress: state.orderPage.deriveryAddress,
   step2valid: state.orderPage.step2valid,
   ordering_complete: state.orderPage.order_complete,
   ordering_error: state.orderPage.ordering_error
})
const mapDispatchToProps = (dispatch) => ({
   onSetStep2Valid: (value) => dispatch(setStep2Valid(value)),
   onPostRequestOrdering: (orderData) => dispatch(postRequestOrdering(orderData))
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)