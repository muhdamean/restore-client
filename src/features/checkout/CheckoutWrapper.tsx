import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise=loadStripe('pk_test_51LMDrNAvWCuijZdmLEO6U7OYOS85TJDVsFQRbSG4BASWruhtGyNGA8oqKdwBicFtRcsm7Yr5IXM0UAcJzGymqjif00Xa0IX9k8');

export default function CheckoutWrapper(){
    return(
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}