import React from "react";

//Components
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div>
        <section class="text-gray-700">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p class="text-lg leading-relaxed  mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold text-lg bg-gray-200 rounded-md py-2 px-4">
                    How do I sell my Farm Equipment?
                  </summary>

                  <span className="text-justify">
                    You can sell your Farm Equipment by listing it on Krishi
                    Sadhan website or Krishi Sadhan mobile applications.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    How can I list my equipment?
                  </summary>

                  <span className="text-justify">
                    Listing on Krishi Sadhan is quite easy. Just click on the
                    button LIST YOUR EQUIPMENT on the top right corner of the
                    website. Choose equipment type and location and click “List
                    Now”. Fill in the details of the equipment and click on the
                    submit button once you complete it.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I sell my used tractor?
                  </summary>

                  <span className="text-justify">
                    You can sell your new or used tractor by listing it on
                    Krishi Sadhan website or mobile applications. Don’t forget
                    to mark it as new or used while creating equipment listing.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Is there an option to buy equipment?
                  </summary>

                  <span class="px-4 py-2 text-justify">
                    Yes there is an option to buy equipment as well. Some
                    providers are open to selling equipment on Krishi Sadhan
                    with a fair deal.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    I don't have a website, Can I still sell on Krishi Sadhan?
                  </summary>

                  <span class="px-4 py-2 text-justify">
                    You don't need a website to start selling on Krishi Sadhan.
                    Once you complete registration, you will have access to your
                    account where you can manage your equipment listing.
                  </span>
                </details>
                <details class="mb-4">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span class="px-4 py-2 text-justify">
                    Go to our{" "}
                    <Link to="/contact">
                      <p className="text-blue-500 inline underline">
                        Contact Us
                      </p>
                    </Link>{" "}
                    page
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
