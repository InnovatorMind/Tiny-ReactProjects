import { useState } from "react";

const Acco = () => {
    const items = [
        {
            title: "HTML",
            content:
                "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
            title: "CSS",
            content:
                "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
        },
        {
            title: "JavaScript",
            content:
                "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-8 w-full max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="p-4 w-full flex justify-between items-center py-4 text-left focus:outline-none"
                    >
                        <span className="text-gray-800 dark:text-gray-100 font-medium">
                            {item.title}
                        </span>
                        {/* Chevron icon */}
                        <svg
                            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {openIndex === index && (
                        <div className="p-4 text-gray-600 dark:text-gray-300">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Acco;
