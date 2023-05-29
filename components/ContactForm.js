// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mayvvprq");
    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }
    return (
        <form className="grid gap-y-6" onSubmit={handleSubmit}>

            <div className="grid gap-y-1">
                <label className="text-left font-semibold" htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className='h-12 bg-transparent border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 rounded-md p-2'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>


            <div className="grid gap-y-1">
                <label className="text-left font-semibold" htmlFor="email">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className='h-56 bg-transparent border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 rounded-md p-2'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                type="submit"
                disabled={state.submitting}
                className='font-semibold grid gap-y-1 pr-2 bg-white dark:bg-primary rounded-3xl flex justify-center align-center p-1 w-24 h-10 transition'
            >
                Submit
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;

