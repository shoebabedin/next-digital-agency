import React, { useEffect, useState } from "react";

const Accordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordion, setAccordion] = useState({});

  useEffect(() => {
    fetch("/Data/accordion.json")
      .then((res) => res.json())
      .then((differnet) => setAccordion(differnet));
  }, []);

  return (
    <>
      <section className="frequently">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="max-w-[635px] mx-auto mb-16">
                <h2 className="font-bold text-xl md:text-[40px] leading-[30px] md:leading-[60px] text-[#393E50] text-center mb-2">
                  Frequently Asked
                  <span className="text-[#30A7D7] ml-1">Question</span>
                </h2>
                <p className="font-normal text-base leading-6 text-[#393e50]/40 text-center hidden md:block">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate
                </p>
              </div>

              {/* <!-- accordion --> */}
              <div className="accordion">
                <div className="grid grid-cols-12 gap-4">
                  {accordion.length > 0 && accordion.map((item, index) => (
                    <div
                      id={item.id}
                      key={index}
                      className="col-span-12 lg:col-span-6"
                    >
                      <li
                        onClick={() => setAccordionOpen(item.id)}
                        className="question flex items-center justify-between px-3"
                        id="question"
                      >
                        <p className="font-medium text-base md:text-xl leading-[30px] text-[#393e50]">
                          {item.ques}
                        </p>

                        <span className="expand-bar"></span>
                      </li>
                      <li
                        className={`font-normal text-base leading-6 text-[rgba(57,62,80,0.4)] list-none ${
                          accordionOpen === item.id
                            ? "translate-y-0 ease-in-out opacity-100 transition-all duration-300 pt-4 pr-2 pb-5 md:pb-10"
                            : "opacity-0 -translate-y-4 transition-all duration-300 h-0"
                        }`}
                      >
                        {item.ans}
                      </li>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- accordion --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
