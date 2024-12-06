'use client'

import { useActionState, useTransition } from 'react'
import { submitForm } from '@/app/actions'
import { Input } from '@headlessui/react'
import { Textarea } from '@headlessui/react'
import { Button } from '@headlessui/react'

import { AtSymbolIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";


export default function ContactForm() {
    const [state, dispatch] = useActionState(submitForm, null)
    const [isPending, startTransition] = useTransition()

    const handleSubmit = (formData) => {
        startTransition(() => {
            dispatch(formData)
        })
    }

    return (
        <section id='contact' className=''>
            <div className="container mx-auto px-3">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                        <div className="lg:w-1/2">
                            <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl sm:leading-none xl:max-w-lg">
                                <span>
                                    Have Questions? Let's Discuss How
                                </span>
                                <span className="inline-block text-primary">
                                    We Can Help You
                                </span>
                            </h2>
                            <div className="space-y-6 py-4">
                                <div className="flex items-center gap-3">
                                    <PhoneIcon className="size-6 text-primary" />
                                    <a
                                        href="tel:+1 (325) 244-9851"
                                        aria-label="Our phone"
                                        title="Our phone"
                                        className="transition-colors duration-300 text-text hover:text-primary"
                                    >
                                        +1 (325) 244-9851
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <AtSymbolIcon className="size-6 text-primary" />
                                    <a
                                        href="mailto:contact@onetekus.com"
                                        aria-label="Our email"
                                        title="Our email"
                                        className="transition-colors duration-300 text-text hover:text-primary"
                                    >
                                        contact@onetekus.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <AtSymbolIcon className="size-6 text-primary" />
                                    <a
                                        href="mailto:contact@onetekus.com"
                                        aria-label="Our email"
                                        title="Our email"
                                        className="transition-colors duration-300 text-text hover:text-primary"
                                    >
                                        immigration@onetekus.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPinIcon className="size-6 text-primary" />
                                    <a
                                        href="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Our address"
                                        title="Our address"
                                        className="transition-colors duration-300 text-text hover:text-primary"
                                    >
                                        5900 Balcones DR STE 4000,
                                        <br />
                                        Austin, TX 78731

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-accent shadow-2xl rounded pb-9 px-3">
                            <form action={handleSubmit} className="max-w-md mx-auto mt-8 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-background text-sm uppercase">
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="mt-1 block w-full rounded py-1 px-3"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="block text-background text-sm uppercase">
                                        Mobile
                                    </label>
                                    <Input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        required
                                        className="mt-1 block w-full rounded py-1 px-3"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-background text-sm uppercase">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        maxLength={150}
                                        className="mt-1 block w-full rounded py-1 px-3"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-background text-sm uppercase">
                                        Subject
                                    </label>
                                    <Textarea
                                        id="subject"
                                        name="subject"
                                        required
                                        className="mt-1 block w-full rounded py-1 px-3"
                                    ></Textarea>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-background text-sm uppercase">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="mt-1 block w-full rounded py-1 px-3"
                                    ></textarea>
                                </div>
                                <div>
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-background transition duration-200 rounded shadow-md bg-primary hover:bg-primary/80 focus:shadow-outline focus:outline-none"
                                    >
                                        {isPending ? 'Submitting...' : 'Submit'}
                                    </Button>
                                </div>
                                {state?.error && (
                                    <div className="mt-4 text-sm text-error" role="alert">
                                        {state.error}
                                    </div>
                                )}
                                {state?.success && (
                                    <div className="mt-4 text-sm text-background" role="alert">
                                        Thank you for your message. We'll get back to you soon!
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

