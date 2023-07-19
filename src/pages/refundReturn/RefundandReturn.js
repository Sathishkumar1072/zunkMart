import React from "react";
import './RefundandReturn.css';

const RefundandReturn = () => {
  return (
    <div className="refund-container">
      <div></div>
      <div  className="refund-details">
        <div> Last updated on Dec 24th 2022 </div>
        <div>
          ZUNK LIFESTYLE PRIVATE LIMITED believes in helping its customers as
          far as possible, and has therefore a liberal cancellation policy.
          Under this policy:
        </div>
        <div className="refund-list-container">
          <p className="refund-list">
            Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them.
          </p>
          <p className="refund-list">
            Please check your item size before you place the order. We have
            clearly mentioned Size variations between Normal fit and our
            Oversized fit.
          </p>
          <p className="refund-list">
            ZUNK LIFESTYLE PRIVATE LIMITED does not accept cancellation requests
            for perishable items like flowers, eatables etc. However,
            refund/replacement can be made if the customer establishes that the
            quality of product delivered is not good.
          </p>
          <p className="refund-list">
            In case of receipt of damaged or defective items please report the
            same to our Customer Service team. The request will, however, be
            entertained once the merchant has checked and determined the same at
            his own end. This should be reported within 2 days of receipt of the
            products.
          </p>
          <p className="refund-list">
            In case you feel that the product received is not as shown on the
            site or as per your expectations, you must bring it to the notice of
            our customer service within 2 days of receiving the product. The
            Customer Service Team after looking into your complaint will take an
            appropriate decision.
          </p>
          <p className="refund-list">
            In case of complaints regarding products that come with a warranty
            from manufacturers, please refer the issue to them.
          </p>
          <p className="refund-list">
            In case of any Refunds approved by the ZUNK LIFESTYLE PRIVATE
            LIMITED, it’ll take 1-2 days for the refund to be processed to the
            end customer.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RefundandReturn;
