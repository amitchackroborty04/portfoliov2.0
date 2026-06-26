'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { Sparkles, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('FAILED:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <motion.div variants={fadeUp} className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-gray-200">Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            className="h-[62px] rounded-[4px] border border-slate-300 !bg-white text-slate-900 placeholder-slate-500 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:!bg-[#20253C] dark:text-white dark:placeholder-[#8C8C8C]"
            required
          />
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-gray-200">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className="h-[62px] rounded-[4px] border border-slate-300 !bg-white text-slate-900 placeholder-slate-500 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:!bg-[#20253C] dark:text-white dark:placeholder-[#8C8C8C]"
            required
          />
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-gray-200">Subject</label>
        <Input
          type="text"
          name="subject"
          placeholder="Subject of your message"
          value={formData.subject}
          onChange={handleChange}
          disabled={loading}
          className="h-[62px] rounded-[4px] border border-slate-300 !bg-white text-slate-900 placeholder-slate-500 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:!bg-[#20253C] dark:text-white dark:placeholder-[#8C8C8C]"
          required
        />
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-2">
        <label className="text-sm font-medium text-slate-700 dark:text-gray-200">Message</label>
        <textarea
          name="message"
          placeholder="Your Message Here"
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          className="h-32 w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-[#20253C] dark:text-white dark:placeholder-[#8C8C8C]"
          required
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        whileTap={{ scale: 0.96 }}
      >
        <Button
          type="submit"
          disabled={loading}
          className="h-[62px] w-full rounded-[4px] bg-purple-600 px-6 text-base font-medium text-white transition-colors duration-200 hover:bg-purple-700 md:w-auto"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

const SocialIcons = () => {
  const socialLinks = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/amit-chackraborty-4709562b2/', label: 'LinkedIn', ariaLabel: 'LinkedIn profile' },
    { icon: FaGithub, href: 'https://github.com/amitchackroborty04', label: 'GitHub', ariaLabel: 'GitHub profile' },
    { icon: FaEnvelope, href: 'mailto:amitck803@mail.com', label: 'Email', ariaLabel: 'Send email' },
    { icon: FaTwitter, href: '#', label: 'Twitter', ariaLabel: 'Twitter profile' },
  ];

  return (
    <motion.div
      className="flex flex-row gap-4 lg:flex-col lg:justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.12 }}
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            aria-label={social.ariaLabel}
            variants={{
              hidden: { opacity: 0, x: -35, scale: 0.85 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: 'easeOut',
                },
              },
            }}
            whileHover={{
              scale: 1.12,
              rotate: 4,
              boxShadow: '0px 0px 35px rgba(147, 51, 234, 0.65)',
            }}
            whileTap={{ scale: 0.92 }}
            className="group inline-flex h-[80px] w-[80px] items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-slate-700 transition-colors duration-200 hover:border-purple-500 hover:bg-purple-600 hover:text-white dark:border-gray-400 dark:bg-transparent dark:text-white md:h-[113px] md:w-[126px]"
          >
            <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 md:h-10 md:w-10" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-100 text-slate-900 dark:bg-[#070d28] dark:text-white">
      
      {/* Background Orbs */}
      <motion.div
        className="pointer-events-none absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-purple-600/30 blur-[110px]"
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-140px] right-[-120px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[120px]"
        animate={{ x: [0, -70, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 md:py-20 lg:px-5">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 border border-slate-300 px-5 py-3 text-xl font-semibold text-slate-700 dark:border-white/70 dark:text-white"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Get In Touch
          </motion.div>

          <motion.h1
            className="mb-4 font-serif text-4xl font-normal md:text-5xl lg:text-5xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            Let&apos;s Talk
          </motion.h1>

          <motion.p
            className="text-base text-slate-600 dark:text-gray-400 md:text-lg"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
          >
            Open to Collaboration and New Opportunities
          </motion.p>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="flex flex-col gap-5 lg:flex-row"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <SocialIcons />

            <motion.div
              className="relative h-64 w-full overflow-hidden rounded-xl shadow-2xl md:h-[500px]"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-600/25 via-transparent to-blue-500/20"
                animate={{ opacity: [0.35, 0.75, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Image
                src="/contact.png"
                alt="Professional contact"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}