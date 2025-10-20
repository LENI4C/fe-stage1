import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        // Validate email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate subject
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitted(true);
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

    if (isSubmitted) {
        return (
            <div className="max-w-2xl mx-auto">
                <div
                    className="bg-white rounded-2xl shadow-2xl p-8 text-center"
                    data-testid="test-contact-success"
                    role="status"
                    aria-live="polite"
                >
                    <div className="text-green-500 text-6xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Message Sent Successfully!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for your message. We'll get back to you as
                        soon as possible.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Full Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 ${
                                errors.name
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300"
                            }`}
                            data-testid="test-contact-name"
                            aria-describedby={
                                errors.name
                                    ? "test-contact-error-name"
                                    : undefined
                            }
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                            <p
                                id="test-contact-error-name"
                                className="mt-2 text-sm text-red-600"
                                data-testid="test-contact-error-name"
                                role="alert"
                                aria-live="polite"
                            >
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 ${
                                errors.email
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300"
                            }`}
                            data-testid="test-contact-email"
                            aria-describedby={
                                errors.email
                                    ? "test-contact-error-email"
                                    : undefined
                            }
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                            <p
                                id="test-contact-error-email"
                                className="mt-2 text-sm text-red-600"
                                data-testid="test-contact-error-email"
                                role="alert"
                                aria-live="polite"
                            >
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 ${
                                errors.subject
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300"
                            }`}
                            data-testid="test-contact-subject"
                            aria-describedby={
                                errors.subject
                                    ? "test-contact-error-subject"
                                    : undefined
                            }
                            aria-invalid={errors.subject ? "true" : "false"}
                        />
                        {errors.subject && (
                            <p
                                id="test-contact-error-subject"
                                className="mt-2 text-sm text-red-600"
                                data-testid="test-contact-error-subject"
                                role="alert"
                                aria-live="polite"
                            >
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-vertical ${
                                errors.message
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300"
                            }`}
                            data-testid="test-contact-message"
                            aria-describedby={
                                errors.message
                                    ? "test-contact-error-message"
                                    : undefined
                            }
                            aria-invalid={errors.message ? "true" : "false"}
                        />
                        {errors.message && (
                            <p
                                id="test-contact-error-message"
                                className="mt-2 text-sm text-red-600"
                                data-testid="test-contact-error-message"
                                role="alert"
                                aria-live="polite"
                            >
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                        data-testid="test-contact-submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
