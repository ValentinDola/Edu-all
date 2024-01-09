"use client";

import React from "react";
import NavigationIndex from "../navigation";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ() {
  const careerRecommendationFAQ = [
    {
      question: "What is career recommendation?",
      description:
        "Career recommendation is a process of suggesting suitable professions or career paths based on an individual's skills, interests, education, and personal preferences.",
    },
    {
      question: "How do career recommendation systems work?",
      description:
        "Career recommendation systems analyze various factors such as skills, personality traits, academic background, and job market trends to provide personalized career suggestions.",
    },
    {
      question: "What are the benefits of using career recommendation tools?",
      description:
        "Career recommendation tools can help individuals make informed decisions about their professional future, aligning their skills and interests with suitable career options.",
    },
    {
      question:
        "Are career recommendations based on personality tests accurate?",
      description:
        "The accuracy of career recommendations depends on the quality of the underlying algorithms and the data used. Personality tests can provide valuable insights but should be considered alongside other factors.",
    },
    {
      question: "Can career recommendations change over time?",
      description:
        "Yes, career recommendations can change as individuals gain new skills, experiences, and preferences. Regularly updating assessments can provide more accurate and relevant recommendations.",
    },
    {
      question: "How can I find the right career for my skills and interests?",
      description:
        "Start by assessing your skills, interests, values, and goals. Seek guidance from career counselors, take aptitude tests, explore internship opportunities, and stay informed about industry trends.",
    },
    {
      question: "Are there online platforms that offer career recommendations?",
      description:
        "Yes, there are several online platforms and tools that offer career recommendations. These platforms often use algorithms and assessments to analyze user profiles and provide personalized suggestions.",
    },
    {
      question:
        "What role do education and certifications play in career recommendations?",
      description:
        "Education and certifications are essential factors in career recommendations. Recommendations may consider the level of education required for certain professions and suggest additional certifications to enhance qualifications.",
    },
    {
      question: "Can career recommendations help with career transitions?",
      description:
        "Yes, career recommendations can be valuable for individuals considering a career change. They can highlight transferable skills and suggest industries or roles that align with the individual's background and aspirations.",
    },
    {
      question: "Are there any limitations to career recommendation systems?",
      description:
        "Career recommendation systems may have limitations, such as relying on self-reported data, cultural biases, or limited industry-specific information. It's important to use recommendations as one source of guidance and not the sole factor in decision-making.",
    },
  ];

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
      <NavigationIndex />

      <section className="mt-[70px]">
        <main className="mx-auto max-w-5xl py-4 sm:px-6 lg:px-8">
          <Accordion showDivider={false} itemClasses={itemClasses}>
            {careerRecommendationFAQ.map((faq, i) => (
              <AccordionItem
                key={i}
                aria-label={faq.question}
                title={faq.question}
              >
                {faq.description}
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </section>
    </>
  );
}
