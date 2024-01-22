import { test, expect } from '@playwright/test';

test.describe("navigation", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://edu-all-k8z7.vercel.app/");
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Career/);
    });

    test('Accordion Test', async ({ page }) => {
  

  // Mock your data or load it from your API/mock server
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

 // Navigate to the page containing the Accordion component
  await page.goto('https://edu-all-k8z7.vercel.app/faq');

  // Wait for the AccordionItems to be present in the DOM
  await page.waitForSelector('.accordion'); // Replace with your actual selector

  // Iterate through each AccordionItem and make assertions
  for (let i = 0; i < careerRecommendationFAQ.length; i++) {
    // Example: Click on the AccordionItem button to expand it
    await page.click(`text=${careerRecommendationFAQ[i].question}`);

    // Example: Wait for the content of the expanded AccordionItem to be present in the DOM
    await page.waitForSelector('.accordion'); // Replace with your actual selector

    // Example: Get the text content of the expanded AccordionItem
    const expandedAccordionItemText = await page.textContent('.accordion-item'); // Replace with your actual selector

    // Example: Assert that the content of the expanded AccordionItem matches the expected description
    expect(expandedAccordionItemText).toContain(careerRecommendationFAQ[i].description);

    // Example: You can also close the AccordionItem if needed (optional)
    await page.click(`text=${careerRecommendationFAQ[i].question}`);
  }
});
});


