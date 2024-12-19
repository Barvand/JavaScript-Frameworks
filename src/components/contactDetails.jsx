import {
  AiFillThunderbolt,
  AiFillContacts,
  AiOutlineMail,
  AiFillAccountBook,
  AiFillAlert,
} from "react-icons/ai";

export function ContactDetails() {
  return (
    <>
        <div className="flex flex-col">
          <div className="md:h-auto col-span-12 lg:col-span-6 p-3 grid">
            <div className="flex items-center">
              {/* Icon Section */}
              <div className="flex-shrink-1">
                <AiFillAccountBook className="text-5xl text-primary" />
              </div>
              {/* Text Section */}
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-secondary mb-2">
                  Frequently asked questions
                </h1>
                <p className="text-primary">
                  At Timeless, we’re here to help! Whether you have questions
                  about our products, need assistance with your order, or want
                  to provide feedback, our team is ready to assist you.
                </p>
              </div>
            </div>
          </div>

          <div className="md:h-auto col-span-12 lg:col-span-6 p-3 grid">
            <div className="flex items-center">
              {/* Icon Section */}
              <div className="flex-shrink-1">
                <AiFillContacts className="text-5xl text-secondary" />
              </div>
              {/* Text Section */}
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-primary mb-2">
                  When can I expect my delivery?
                </h1>
                <p className="text-primary">
                  We ship out products from our warehouse after 1 to 3 business days.
                </p>
              </div>
            </div>
          </div>
          <div className="md:h-auto col-span-12 lg:col-span-6 p-3 grid">
            <div className="flex items-center">
              {/* Icon Section */}
              <div className="flex-shrink-1">
                <AiFillAlert className="text-5xl text-primary" />
              </div>
              {/* Text Section */}
              <div className="ml-4 text-primary">
                <h1 className="text-3xl font-bold text-secondary mb-2">
                  Incredible prices
                </h1>
                <p className="">
                 We simply have amazing prices, As we are contact with the direct supplier of most items. This allows us to keep our marging low for our customers. 
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
