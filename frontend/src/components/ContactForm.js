import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.first_name || !form.last_name || !form.email || !form.description) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      setForm({ first_name: "", last_name: "", email: "", phone: "", description: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-slate-200">
          {/* Left side - Info */}
          <div className="p-10 sm:p-14" style={{ backgroundColor: "#0B1B3D" }}>
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2
              data-testid="contact-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Ready to move forward?
            </h2>
            <p className="text-base text-slate-400 leading-relaxed mb-10">
              Contact us today to learn more about our AI solutions and start your journey towards enhanced efficiency and growth.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm">
                  <Mail size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-white font-medium">hello@neuraltrix.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm">
                  <Phone size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-sm text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm">
                  <MapPin size={18} className="text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Office</p>
                  <p className="text-sm text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-10">100% confidential and secure</p>
          </div>
          {/* Right side - Form */}
          <div className="bg-white p-10 sm:p-14">
            {submitted ? (
              <div data-testid="contact-success" className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1B3D] mb-2" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Thank you!
                </h3>
                <p className="text-sm text-slate-600">We've received your message and will get back to you shortly.</p>
                <Button
                  data-testid="contact-send-another"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">
                      First Name *
                    </label>
                    <Input
                      data-testid="contact-first-name"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="rounded-sm border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">
                      Last Name *
                    </label>
                    <Input
                      data-testid="contact-last-name"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="rounded-sm border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">
                    Email Address *
                  </label>
                  <Input
                    data-testid="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="rounded-sm border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">
                    Phone Number
                  </label>
                  <Input
                    data-testid="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="rounded-sm border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    data-testid="contact-description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="rounded-sm border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]"
                  />
                </div>
                {error && (
                  <p data-testid="contact-error" className="text-sm text-red-500">{error}</p>
                )}
                <Button
                  data-testid="contact-submit-button"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0B1B3D] text-white hover:bg-[#0B1B3D]/90 rounded-sm py-3 font-semibold text-sm"
                >
                  {loading ? "Submitting..." : (
                    <>Submit <Send size={14} className="ml-2" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
