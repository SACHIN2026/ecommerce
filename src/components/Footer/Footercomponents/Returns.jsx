import React from "react";
import "./Returns.scss"

const Returns = () => {
    return (
        <div className="returns-page">
            <h2>Returns & Refunds Policy</h2>
            <p>
                We strive to ensure that you are completely satisfied with your purchase. However, if you're not happy with your order, you can return the product under the following conditions:
            </p>
            <ul>
                <li>Returns must be initiated within 30 days of receiving your order.</li>
                <li>The item must be unused, in its original packaging, and in the same condition as when you received it.</li>
                <li>Proof of purchase (receipt or invoice) is required for all returns.</li>
            </ul>
            <p>
                Once we receive your returned item, our team will inspect it and notify you about the status of your refund. If your return is approved, we will process a refund to your original payment method within a certain number of days.
            </p>
            <p>
                Please note that shipping costs are non-refundable, and customers are responsible for the return shipping fees.
            </p>
        </div>
    );
};

export default Returns;
