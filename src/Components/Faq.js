import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How can I book a tour?",
      answer:
        "You can book a tour directly from our website by selecting your preferred package and clicking on the Book Trip button."
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule your booking based on our cancellation policy."
    },
    {
      question: "Do you provide tour guides?",
      answer:
        "Yes, experienced and professional tour guides are available for selected packages."
    },
    {
      question: "Are meals included in the tour?",
      answer:
        "Meals inclusion depends on the package. Please check the package details before booking."
    },
    {
      question: "Is travel insurance included?",
      answer:
        "Travel insurance is optional and can be added during booking."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Tour & Travel FAQ</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-white p-4 rounded-2xl shadow-md cursor-pointer" >
            <summary className="font-semibold text-lg">{faq.question}</summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
