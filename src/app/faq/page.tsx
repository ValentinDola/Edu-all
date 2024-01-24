"use client";

import React from "react";
import NavigationIndex from "../navigation";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ() {
  // Array containing FAQ data
  // FAQ items with questions and descriptions
  const careerRecommendationFAQ = [
    {
      question: "What is Educational Recommendation?",
      description:
        "Educational Recommendation is a process of suggesting suitable professions or career paths based on an individual's skills, interests, education, and personal preferences.",
    },
    {
      question: "How do Educational Recommendation systems work?",
      description:
        "Educational Recommendation systems analyze various factors such as skills, personality traits, academic background, and job market trends to provide personalized career suggestions.",
    },
    {
      question:
        "What are the benefits of using Educational Recommendation tools?",
      description:
        "Educational Recommendation tools can help individuals make informed decisions about their professional future, aligning their skills and interests with suitable career options.",
    },
    {
      question:
        "Are Educational Recommendations based on personality tests accurate?",
      description:
        "The accuracy of Educational Recommendations depends on the quality of the underlying algorithms and the data used. Personality tests can provide valuable insights but should be considered alongside other factors.",
    },
    {
      question: "Can Educational Recommendations change over time?",
      description:
        "Yes, Educational Recommendations can change as individuals gain new skills, experiences, and preferences. Regularly updating assessments can provide more accurate and relevant recommendations.",
    },
    {
      question: "How can I find the right career for my skills and interests?",
      description:
        "Start by assessing your skills, interests, values, and goals. Seek guidance from career counselors, take aptitude tests, explore internship opportunities, and stay informed about industry trends.",
    },
    {
      question:
        "Are there online platforms that offer Educational Recommendations?",
      description:
        "Yes, there are several online platforms and tools that offer Educational Recommendations. These platforms often use algorithms and assessments to analyze user profiles and provide personalized suggestions.",
    },
    {
      question:
        "What role do education and certifications play in Educational Recommendations?",
      description:
        "Education and certifications are essential factors in Educational Recommendations. Recommendations may consider the level of education required for certain professions and suggest additional certifications to enhance qualifications.",
    },
    {
      question: "Can Educational Recommendations help with career transitions?",
      description:
        "Yes, Educational Recommendations can be valuable for individuals considering a career change. They can highlight transferable skills and suggest industries or roles that align with the individual's background and aspirations.",
    },
    {
      question:
        "Are there any limitations to Educational Recommendation systems?",
      description:
        "Educational Recommendation systems may have limitations, such as relying on self-reported data, cultural biases, or limited industry-specific information. It's important to use recommendations as one source of guidance and not the sole factor in decision-making.",
    },
  ];

  // CSS classes for custom styling of Accordion components
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small -mt-5",
  };

  return (
    <>
      {/* Navigation component */}
      <NavigationIndex />

      {/* FAQ section */}
      <section className="mt-[70px]">
        <main className="mx-auto max-w-5xl py-4 sm:px-6 lg:px-8">
          {/* Accordion component for displaying FAQ items */}
          <Accordion
            showDivider={false}
            itemClasses={itemClasses}
            className="accordion"
          >
            {careerRecommendationFAQ.map((faq, i) => (
              // AccordionItem component for each FAQ item
              <AccordionItem
                key={i}
                aria-label={faq.question}
                title={faq.question}
                className="accordion-item"
              >
                {/* FAQ item description */}
                {faq.description}
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </section>
    </>
  );
}

// Code Organization:

// The code is well-organized, with clear sections for the import statements, component function, and the return block.
// Navigation Component:

// The integration of the NavigationIndex component at the beginning ensures consistent navigation across pages.
// FAQ Data:

// The array careerRecommendationFAQ stores FAQ data in an organized manner.
// Accordion Component:

// The Accordion component from @nextui-org/accordion is appropriately used to create an accordion-style FAQ section.
// Item Classes Customization:

// The use of itemClasses object allows for customizable styling of Accordion components, providing a visually appealing presentation.
// Key Prop in Array Mapping:

// Using the index (i) as the key prop in the array mapping of FAQ items is acceptable here since the FAQ items are static and not expected to change dynamically.
// Section Margin:

// The use of mt-[70px] on the section element provides a top margin, ensuring proper spacing between the navigation and FAQ content.
// Responsive Design:

// The use of mx-auto and max-w-5xl classes ensures that the FAQ content is centered and does not extend beyond a specified width, contributing to a responsive design.
// CSS Classes for Styling:

// The custom CSS classes (itemClasses) for styling Accordion components are appropriately used and named, enhancing readability.
