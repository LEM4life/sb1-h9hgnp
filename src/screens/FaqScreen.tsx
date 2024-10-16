import React from 'react';

export const FaqScreen: React.FC = () => {
  const faqs = [
    { question: "What is Hayah App?", answer: "Hayah App is a fashion discovery platform for Muslim modest fashion." },
    { question: "How does the app work?", answer: "Swipe right on clothes you like and left on those you don't. Our algorithm learns your style preferences." },
    { question: "Can I switch between male and female modes?", answer: "Yes, you can switch between male, female, and children's modes in the Mode Selection screen." },
    { question: "How do I report a bug?", answer: "You can report bugs through the Profile screen. We appreciate your feedback!" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-800">FAQ & Bug Report</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-semibold text-green-700">{faq.question}</h2>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
      <div className="mt-8">
        <h2 className="font-semibold text-green-700 mb-2">Report a Bug</h2>
        <textarea className="w-full p-2 border border-green-300 rounded" rows={4} placeholder="Describe the bug here..."></textarea>
        <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">Submit Bug Report</button>
      </div>
    </div>
  );
};