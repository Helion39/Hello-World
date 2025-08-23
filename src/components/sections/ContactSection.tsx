import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import CustomCaptcha, { CustomCaptchaRef } from "@/components/ui/custom-captcha";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const captchaRef = useRef<CustomCaptchaRef>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if CAPTCHA is completed
    if (!captchaValue) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Mohammad Nabil Hanif',
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@example.com',
        subject: `Portfolio Contact from ${formData.name}`,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setCaptchaValue(null);
      captchaRef.current?.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-8">
            Your privacy is important. This form uses secure transmission and your information is only used to respond to your inquiry.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell me about your project or how I can help..."
                className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* CAPTCHA */}
            <div className="flex justify-center">
              <CustomCaptcha
                ref={captchaRef}
                onChange={handleCaptchaChange}
                theme="light"
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-center">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-center">
                  {!captchaValue ? 'Please complete the CAPTCHA.' : 'Something went wrong. Please try again.'}
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://wa.me/your-phone-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Telegram"
            >
              <FaTelegram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;