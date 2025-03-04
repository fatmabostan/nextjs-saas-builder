import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const PriceCard = ({title, price, description, feature1, feature2, feature3, className}: {
    title: string,
    price: string,
    description: string,
    feature1: string,
    feature2: string,
    feature3: string,
    className?: string
}) => {
    return(<CardContainer className="inter-var ">
      <CardBody className={twMerge("bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border", className)}>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white "
          >
            {title}
            <h2 className="text-6xl ">{price}</h2>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
            <ul className="my-4 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <CheckIcon /> {feature1}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                {feature2}
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon />
                {feature3}
              </li>
            </ul>
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Get Started Now
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    )
}

export default PriceCard