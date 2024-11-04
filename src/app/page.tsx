'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    CheckCircle,
    Code,
    Globe,
    Mail,
    MapPin,
    Menu,
    Phone,
    Search,
    Server,
    Shield,
    Smartphone,
    Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80'>
            <header className="sticky top-0 z-50 px-4 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <Link className="flex items-center space-x-2" href="/">
                        <Zap className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl">TechNova</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        {["Services", "About", "Testimonials", "Contact"].map((item) => (
                            <Link key={item} className="text-sm font-medium hover:text-primary transition-colors" href={`#${item.toLowerCase()}`}>
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <Button className="hidden md:inline-flex">Get Started</Button>
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center py-4 bg-background">
                        {["Services", "About", "Testimonials", "Contact"].map((item) => (
                            <Link key={item} className="w-full text-center py-2 hover:bg-accent" href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                                {item}
                            </Link>
                        ))}
                        <Button className="mt-4">Get Started</Button>
                    </nav>
                </div>
            )}
            <main className='flex-1'>
                <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background'>
                    <div className='container px-4 md:px-6'>
                        <div className='flex flex-col items-center space-y-4 text-center'>
                            <div className='space-y-2'>
                                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                                    Innovative IT Solutions for Your Business
                                </h1>
                                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                                    Empowering your digital transformation with
                                    cutting-edge web, mobile, and cloud
                                    solutions.
                                </p>
                            </div>
                            <div className='space-x-4'>
                                <Link href='#contact'>
                                    <Button
                                        size='lg'
                                        className='bg-primary text-primary-foreground hover:bg-primary/90'
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href='#services'>
                                    <Button size='lg' variant='outline'>
                                        Our Services
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='services'
                    className='w-full py-12 md:py-24 lg:py-32'
                >
                    <div className='container px-4 md:px-6'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
                            Our Services
                        </h2>
                        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                            {[
                                {
                                    icon: Globe,
                                    title: 'Web Development',
                                    description:
                                        'Create responsive and dynamic websites tailored to your business needs.',
                                },
                                {
                                    icon: Smartphone,
                                    title: 'Mobile App Development',
                                    description:
                                        'Build native and cross-platform mobile apps for iOS and Android.',
                                },
                                {
                                    icon: Search,
                                    title: 'SEO Optimization',
                                    description:
                                        'Improve your online visibility and drive organic traffic to your website.',
                                },
                                {
                                    icon: Server,
                                    title: 'Cloud Solutions',
                                    description:
                                        'Leverage cloud technologies for scalable and efficient infrastructure.',
                                },
                                {
                                    icon: Shield,
                                    title: 'Cybersecurity',
                                    description:
                                        'Protect your digital assets with advanced security measures and best practices.',
                                },
                                {
                                    icon: Code,
                                    title: 'Custom Software Development',
                                    description:
                                        'Develop bespoke software solutions to streamline your business processes.',
                                },
                            ].map((service, index) => (
                                <Card
                                    key={index}
                                    className='transition-all hover:shadow-lg'
                                >
                                    <CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
                                        <service.icon className='h-12 w-12 text-primary' />
                                        <h3 className='text-xl font-bold'>
                                            {service.title}
                                        </h3>
                                        <p className='text-gray-500 dark:text-gray-400'>
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id='about'
                    className='w-full py-12 md:py-24 lg:py-32 bg-accent'
                >
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-10 lg:grid-cols-2 items-center'>
                            <div className='space-y-4'>
                                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                                    About TechNova
                                </h2>
                                <p className='text-gray-500 dark:text-gray-400 text-xl'>
                                    With over a decade of experience in the IT
                                    industry, TechNova has been at the forefront
                                    of digital innovation. Our team of expert
                                    developers, designers, and consultants
                                    brings diverse industry knowledge to help
                                    businesses of all sizes overcome
                                    technological challenges and seize digital
                                    opportunities.
                                </p>
                                <ul className='grid gap-4 mt-6'>
                                    {[
                                        'Cutting-edge technology expertise',
                                        'Tailored solutions for your business',
                                        'Agile development methodology',
                                        '24/7 support and maintenance',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className='flex items-center space-x-2'
                                        >
                                            <CheckCircle className='h-5 w-5 text-primary' />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='relative'>
                                <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-20 rounded-3xl'></div>
                                <img
                                    src='/placeholder.svg?height=400&width=600'
                                    alt='Team collaboration'
                                    className='w-full h-auto rounded-3xl shadow-2xl'
                                    width={600}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id='testimonials'
                    className='w-full py-12 md:py-24 lg:py-32'
                >
                    <div className='container px-4 md:px-6'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
                            Client Success Stories
                        </h2>
                        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                            {[
                                {
                                    name: 'Sarah Johnson',
                                    role: 'CTO, E-commerce Giant',
                                    quote: "TechNova's web development services helped us increase our online sales by 200% in just six months.",
                                },
                                {
                                    name: 'Michael Chen',
                                    role: 'Founder, Tech Startup',
                                    quote: 'The mobile app TechNova developed for us has over 1 million downloads and a 4.8-star rating.',
                                },
                                {
                                    name: 'Emily Rodriguez',
                                    role: 'Marketing Director, SaaS Company',
                                    quote: "Thanks to TechNova's SEO services, we now rank on the first page for all our key industry terms.",
                                },
                            ].map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className='relative overflow-hidden'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-10'></div>
                                    <CardContent className='relative p-6 space-y-4'>
                                        <p className='text-gray-500 dark:text-gray-400 italic'>
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <div>
                                            <p className='font-semibold'>
                                                {testimonial.name}
                                            </p>
                                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section
                    id='contact'
                    className='w-full py-12 md:py-24 lg:py-32 bg-accent'
                >
                    <div className='container px-4 md:px-6'>
                        <div className='grid gap-10 lg:grid-cols-2'>
                            <div className='space-y-4'>
                                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                                    Get in Touch
                                </h2>
                                <p className='text-gray-500 dark:text-gray-400 text-xl'>
                                    Ready to transform your business with
                                    cutting-edge IT solutions? Contact us today
                                    for a free consultation.
                                </p>
                                <div className='space-y-2'>
                                    {[
                                        {
                                            icon: MapPin,
                                            text: '123 Tech Avenue, Innovation City, 12345',
                                        },
                                        {
                                            icon: Phone,
                                            text: '+1 (555) 123-4567',
                                        },
                                        {
                                            icon: Mail,
                                            text: 'contact@technova.com',
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className='flex items-center space-x-2'
                                        >
                                            <item.icon className='h-5 w-5 text-primary' />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Card>
                                <CardContent className='p-6'>
                                    <form className='space-y-4'>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <div className='space-y-2'>
                                                <label
                                                    htmlFor='first-name'
                                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                                >
                                                    First name
                                                </label>
                                                <Input
                                                    id='first-name'
                                                    placeholder='Enter your first name'
                                                />
                                            </div>
                                            <div className='space-y-2'>
                                                <label
                                                    htmlFor='last-name'
                                                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                                >
                                                    Last name
                                                </label>
                                                <Input
                                                    id='last-name'
                                                    placeholder='Enter your last name'
                                                />
                                            </div>
                                        </div>
                                        <div className='space-y-2'>
                                            <label
                                                htmlFor='email'
                                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id='email'
                                                placeholder='Enter your email'
                                                type='email'
                                            />
                                        </div>
                                        <div className='space-y-2'>
                                            <label
                                                htmlFor='message'
                                                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className='flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                                id='message'
                                                placeholder='Enter your message'
                                            ></textarea>
                                        </div>
                                        <Button className='w-full'>
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className='w-full py-6 bg-background'>
                <div className='container px-4 md:px-6'>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                        <div className='flex items-center space-x-2'>
                            <Zap className='h-6 w-6 text-primary' />
                            <span className='font-bold'>TechNova</span>
                        </div>
                        <p className='text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left'>
                            © 2024 TechNova. All rights reserved.
                        </p>
                        <div className='flex items-center space-x-2'>
                            {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                                <Link
                                    key={social}
                                    className='text-gray-500 hover:text-primary dark:text-gray-400'
                                    href='#'
                                >
                                    <span className='sr-only'>{social}</span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='h-5 w-5'
                                    >
                                        {social === 'Twitter' && (
                                            <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9  4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                                        )}
                                        {social === 'GitHub' && (
                                            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                                        )}
                                        {social === 'LinkedIn' && (
                                            <>
                                                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                                                <rect
                                                    width='4'
                                                    height='12'
                                                    x='2'
                                                    y='9'
                                                />
                                                <circle cx='4' cy='4' r='2' />
                                            </>
                                        )}
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
