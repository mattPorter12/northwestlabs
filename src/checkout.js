import React from 'react'
import * as bs from 'react-bootstrap'
import { Formik, Form, Field} from 'formik'
import AppContext from './context'
import {useHistory} from 'react-router-dom'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
const axios = require('axios');
const stripePromise = loadStripe('pk_test_hRhMFEy5f6bfrK43BUcWvv1v002O9UELZu')


function Checkout(props) {
    
    return (
        <Elements stripe= {stripePromise}>
        <CheckoutController />
        </Elements>
    )
    
}
export default Checkout


const CheckoutController = props => {
    const total = 50
    const context = React.useContext(AppContext)
    const stripe = useStripe();
    const elements = useElements();
    let history = useHistory();
    return (
        <Formik
            initialValues={{
                name: 'Conrad Fox',
                address1: '1234',
                address2: '5678',
                city: 'Provo',
                state: 'UT',
                zipcode: '84602',
            }}
            validateOnChange={true}
            validateOnBlur={false}
            validate={values => {
                const errors = {}
                for (const key in values)
                {
                    if(values[key].length < 1 && key !== "address2")
                    {
                        errors[key] = "Required"
                    }
                }
                return errors

            }}
            
            
            onSubmit={async (values, actions) => {
                    //console.log('submit', values)
                    const items = []
                    for (const [pid, qty] of Object.entries(context.cart)) {
                        const product = context.products[pid]
                        if (product) {
                            items.push({
                                pid: pid,
                                qty: qty,
                                price: product.price,
                            })
                        }
                    }
                        
                
                    const resp = await axios.post('http://localhost:8000/api/sale/', { 
                        name: values.name,
                        address1: values.address1,
                        address2: values.address2,
                        city: values.city,
                        state: values.state,
                        zipcode: values.zipcode,
                        total: context.getCartTotal(),
                        items: items,
                        paymentIntent: {}
                     
                       })
                       console.log(resp.data)

                       const result = await stripe.confirmCardPayment(resp.data.client_secret, {
                        payment_method: {
                            card: elements.getElement(CardElement),
                            billing_details: {
                                name: values.name,
                            },
                        }
                    })
                      if (result.error) {
                          alert(result.error.message)  
                      } 
                      else {
                        if (result.paymentIntent.status === 'succeeded') {
                            actions.setSubmitting(false)
                            context.clearCart()
                            history.push('/thanks')
                        }
                      }

            }}
        >{form => (
            <PaymentForm form={form} total={total} />
        )}</Formik>
    )
}


/**
 * The form layout/html.
 * This component needs finishing.
 */
const PaymentForm = props => {
    const context = React.useContext(AppContext)
    return (
        <Form>
            <bs.Row>
                <bs.Card style = {{width: "22rem"}} >
                <div className="card-header" ><h2>Shipping</h2></div>
                <bs.Col md = "6">
                    <Input title="Name:" name="name" type="text" />
                    <Input title="Address 1:" name="address1" type="text" />
                    <Input title="Address 2:" name="address2" type="text" />
                    <Input title="City:" name="city" type="text" />
                    <Input title="State:" name="state" type="text" />
                    <Input title="Zipcode:" name="zipcode" type="text" />
                    </bs.Col>
                    </bs.Card>
                <bs.Col md = '6'>
                <bs.Card>
                <div className = 'card-header'><h2>Payment</h2></div>
                    <CardElement />
                    <div style= {{marginTop: "3rem"}}><p>Your card will be charged ${context.getCartTotal()}
                    
                    </p></div>
                        
                    </bs.Card>
                    <SubmitButton name="submit" /> 
                </bs.Col>
                
            </bs.Row>
            
                        
        </Form>
    
    
        
        
           
    )
}

const SubmitButton = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Button disabled = {rProps.form.isSubmitting} variant="primary" type="submit">
        {/* <bs.Spinner
            as="span"
            animation = "border"
            size="sm"
            role="status"
            aria-hidden="true"
        /> Purchase */}
        Purchase
        <bs.Spinner
                as="span"
                animation = "border"
                size="sm"
                role="status"
                aria-hidden="true"
            
                 style = {rProps.form.isSubmitting ? { display:'inline-block'} : {display:'none'}}
                  >
        </bs.Spinner>
    </bs.Button>
    )}</Field> 
)
/**
 * A form input.
 *   props.title - the title that shows above the input box
 *   props.type - the type of input (see React Bootstrap Form.Control)
 *   props.placeholder - placeholder text in the input.
 * This component is finished and doesn't need additional work.
 */
const Input = (props) => (
    <Field name={props.name}>{rProps => (
        <bs.Form.Group>
            {props.title &&
                <bs.Form.Label>{props.title}</bs.Form.Label>
            }
            <bs.Form.Control
                type={props.type}
                placeholder={props.placeholder}
                disabled= {rProps.form.isSubmitting}// grey it out
                {...rProps.field}
            />
            {rProps.meta.touched && rProps.meta.error &&
                <div className="text-danger">{rProps.meta.error}</div>
            }
        </bs.Form.Group>
    )}</Field>
)


