"use client";

import { FC, useMemo, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import localFont from "@next/font/local";

interface Review {
  rating: number;
  description: string;
}

interface Map {
  [key: number]: {
    count: number;
    percentage: string;
  };
}

const caviarBold = localFont({
  src: [
    {
      path: "../../../public/fonts/caviar/CaviarDreams_Bold.ttf",
      weight: "400",
    },
  ],
});

export const ReviewSummary: FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [rating, setRating] = useState(1.7);
  //   return (
  //     <Rating
  //       readOnly
  //       halfFillMode="svg"
  //       style={{ width: 250 }}
  //       value={rating}
  //       onChange={setRating}
  //     />
  //   );
  const getPercentage = (groupLength: number) => {
    console.log("grouplenmgth", groupLength);
    return groupLength === 0
      ? "10%"
      : ((groupLength / reviews.length) * 100).toString();
  };
  console.log("ghdsfg", getPercentage(0));
  const groupsReviewCount = reviews.reduce(
    (prev, { rating }) => {
      const foundRating = Number(Object.keys(prev)[rating]);
      prev[foundRating].count++;
      prev[foundRating].percentage = `${getPercentage(
        prev[foundRating].count
      )}%`;
      return prev;
    },
    {
      5: { count: 0, percentage: "0%" },
      4: { count: 0, percentage: "23%" },
      3: { count: 0, percentage: "0%" },
      2: { count: 0, percentage: "0%" },
      1: { count: 0, percentage: "0%" },
      0: { count: 0, percentage: "0%" },
    } as Map
  );
  const findStarNumberReviews = (starNumber: number) => {
    const starNumberReviews = reviews.filter(
      (review) => review.rating === starNumber
    );
    return (starNumberReviews.length / reviews.length) * 100;
  };
  const average = useMemo(
    () =>
      reviews.reduce(
        (prev, current) => (prev + current.rating) / reviews.length,
        0
      ),
    [reviews]
  );
  return (
    <div className="flex flex-col gap-2 px-12 mb-24 md:px-44">
      <h3 className={`${caviarBold.className} text-5xl text-primary`}>
        Customer Reviews
      </h3>
      <div className="flex items-center">
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          {average.toFixed(1)}
        </p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          out of
        </p>
        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
          5
        </p>
      </div>
      <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
        {reviews.length} review{reviews.length === 1 ? "" : "s"}
      </p>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          5 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className={`h-5 bg-yellow-300 rounded w-[${groupsReviewCount[5].percentage}]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[5].count}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          4 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            style={
              {
                "--custom-width": groupsReviewCount[4].percentage,
              } as any
            }
            className={`h-5 bg-yellow-300 rounded w-[--custom-width]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[4].count}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          3 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className={`h-5 bg-yellow-300 rounded w-[${groupsReviewCount[3].percentage}]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[3].count}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          2 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className={`h-5 bg-yellow-300 rounded w-[${groupsReviewCount[2].percentage}]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[2].count}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          1 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className={`h-5 bg-yellow-300 rounded w-[${groupsReviewCount[1].percentage}]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[1].count}
        </span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          0 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div
            className={`h-5 bg-yellow-300 rounded w-[${groupsReviewCount[0].percentage}]`}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {groupsReviewCount[0].count}
        </span>
      </div>
    </div>
  );
};
