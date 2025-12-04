"use client";
import { FormEvent, useState, useCallback, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, AlertCircle, AlertTriangle } from "lucide-react";
import confetti from "canvas-confetti";
import { commonDomainTypos, validTLDs } from "@/data/email-validation";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [suggestedEmail, setSuggestedEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const fireConfetti = useCallback(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#c8ff00", "#ff6b6b", "#4ecdc4", "#ffe66d", "#95e1d3"];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
    });
  }, []);

  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(email.toLowerCase().trim());
  };

  const checkDomainTypo = (
    email: string
  ): { hasTypo: boolean; suggestion: string | null } => {
    const parts = email.toLowerCase().trim().split("@");
    if (parts.length !== 2) return { hasTypo: false, suggestion: null };

    const domain = parts[1];

    if (commonDomainTypos[domain]) {
      return {
        hasTypo: true,
        suggestion: `${parts[0]}@${commonDomainTypos[domain]}`,
      };
    }

    const domainParts = domain.split(".");
    if (domainParts.length >= 2) {
      const tld = domainParts[domainParts.length - 1];

      if (tld.length === 1) {
        return { hasTypo: true, suggestion: null };
      }

      if (!validTLDs.includes(tld) && tld.length <= 2) {
        const mainDomain = domainParts.slice(0, -1).join(".");
        if (["gmail", "yahoo", "hotmail", "outlook"].includes(mainDomain)) {
          return {
            hasTypo: true,
            suggestion: `${parts[0]}@${mainDomain}.com`,
          };
        }
      }
    }

    return { hasTypo: false, suggestion: null };
  };

  // Handle email change with validation
  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
    setEmailWarning("");
    setSuggestedEmail("");

    if (!value.trim()) return;

    if (!isValidEmailFormat(value)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    const typoCheck = checkDomainTypo(value);
    if (typoCheck.hasTypo) {
      if (typoCheck.suggestion) {
        setEmailWarning(`Did you mean ${typoCheck.suggestion}?`);
        setSuggestedEmail(typoCheck.suggestion);
      } else {
        setEmailWarning("This email domain looks incorrect. Please check.");
      }
    }
  };

  const applySuggestion = () => {
    if (suggestedEmail) {
      setEmail(suggestedEmail);
      setEmailWarning("");
      setSuggestedEmail("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!name.trim()) {
      setNameError("Name is required");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!isValidEmailFormat(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      hasError = true;
    } else {
      setMessageError("");
    }

    if (hasError) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          name: name.trim(),
          message: message.trim(),
        }),
      });

      if (response.ok) {
        fireConfetti();
        setMessageSent(true);
        setEmail("");
        setName("");
        setMessage("");
        setEmailError("");
        setEmailWarning("");
        setSuggestedEmail("");
        setNameError("");
        setMessageError("");

        // Reset messageSent after 5 seconds
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        setMessageError("Something went wrong, please try again later!");
      }
    } catch (error) {
      console.error("Submission error", error);
      setMessageError("Submission failed. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`py-20 px-4 transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold italic font-montserrat leading-tight mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            We&apos;d love to
            <br />
            hear from you!
          </h1>
          <p
            className={`text-sm md:text-base font-inter font-bold tracking-tight ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}
          >
            Whether you have a project in mind, want to collaborate, or just
            have a question, feel free to reach out. I&apos;m ready to help.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name Input */}
          <div>
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.trim()) setNameError("");
                }}
                className={`w-full px-5 py-4 rounded-full border font-lato text-sm transition-all duration-300 outline-none ${
                  nameError
                    ? "border-red-500 bg-red-500/10"
                    : isDark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400"
                }`}
              />
              <AnimatePresence>
                {nameError && (
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {nameError && (
                <motion.p
                  className="text-red-500 text-xs mt-2 ml-4"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {nameError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Input */}
          <div>
            <div className="relative">
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`w-full px-5 py-4 rounded-full border font-lato text-sm transition-all duration-300 outline-none pr-12 ${
                  emailError
                    ? "border-red-500 bg-red-500/10"
                    : emailWarning
                    ? "border-yellow-500 bg-yellow-500/10"
                    : isDark
                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400"
                }`}
              />
              <AnimatePresence>
                {emailError && (
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </motion.div>
                )}
                {emailWarning && !emailError && (
                  <motion.div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {emailError && (
                <motion.p
                  className="text-red-500 text-xs mt-2 ml-4"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {emailError}
                </motion.p>
              )}
              {emailWarning && !emailError && (
                <motion.div
                  className="flex items-center gap-2 mt-2 ml-4"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <span className="text-yellow-500 text-xs">
                    {emailWarning}
                  </span>
                  {suggestedEmail && (
                    <button
                      type="button"
                      onClick={applySuggestion}
                      className="text-xs text-[#c8ff00] hover:underline cursor-pointer font-medium"
                    >
                      Yes, fix it
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              id="message"
              placeholder="Write your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim()) setMessageError("");
              }}
              rows={5}
              className={`w-full px-5 py-4 rounded-3xl border font-lato text-sm transition-all duration-300 outline-none resize-none ${
                messageError
                  ? "border-red-500 bg-red-500/10"
                  : isDark
                  ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                  : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400"
              }`}
            />
            <AnimatePresence>
              {messageError && (
                <motion.p
                  className="text-red-500 text-xs mt-2 ml-4"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {messageError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-6 py-3 rounded-full bg-[#c8ff00] text-black font-medium text-sm flex items-center gap-2 hover:bg-[#b8ef00] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "SENDING..." : "SEND"}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            <AnimatePresence>
              {messageSent && (
                <motion.span
                  className="text-[#c8ff00] text-sm font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                ></motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
