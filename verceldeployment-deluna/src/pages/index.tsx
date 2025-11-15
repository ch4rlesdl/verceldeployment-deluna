import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Separator } from '../components/ui/separator';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

export default function Home() {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setService('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-200 to-pink-200 rounded-lg"></div>
            <span className="font-semibold text-gray-800">Charles De Luna</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#services" className="hover:text-gray-900 transition">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-red-300 to-red-200 text-gray-800 hover:from-red-400 hover:to-red-300 border-0">
            Get Started
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="text-center mb-24">
          <div className="inline-block mb-6">
            <Badge className="bg-blue-100 text-blue-700 border-0 font-medium px-4 py-2">
              ✨ Up-to-date!
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Deploy with <span className="bg-gradient-to-r from-red-300 via-blue-300 to-green-300 bg-clip-text text-transparent">Vercel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Deploy stunning digital experiences with our intuitive platform. Built for creators, developers, and visionaries.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-300 to-blue-200 text-gray-800 hover:from-blue-400 hover:to-blue-300 border-0 px-8 py-6 text-base">
              Explore Now
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-base hover:bg-gray-50">
              Learn More
            </Button>
          </div>
        </section>

        <Separator className="my-16 bg-gray-200" />

        <section id="features" className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-red-50 to-white border-red-100 p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-red-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intuitive Design</h3>
              <p className="text-gray-600">Elegant and user-friendly interface that feels natural to use.</p>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance that delivers results instantly.</p>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Secure</h3>
              <p className="text-gray-600">Enterprise-grade security for peace of mind.</p>
            </Card>
          </div>
        </section>

        <section id="services" className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Consulting</h3>
              <p className="text-gray-600">Expert guidance tailored to your unique needs and goals.</p>
              <Badge className="bg-red-100 text-red-700 border-0 w-fit">Professional</Badge>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Development</h3>
              <p className="text-gray-600">Custom solutions built with cutting-edge technology.</p>
              <Badge className="bg-blue-100 text-blue-700 border-0 w-fit">Advanced</Badge>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Support</h3>
              <p className="text-gray-600">24/7 dedicated support to ensure your success.</p>
              <Badge className="bg-green-100 text-green-700 border-0 w-fit">Available</Badge>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Analytics</h3>
              <p className="text-gray-600">Data-driven insights to optimize your performance.</p>
              <Badge className="bg-gray-200 text-gray-700 border-0 w-fit">Comprehensive</Badge>
            </div>
          </div>
        </section>

        <Separator className="my-16 bg-gray-200" />

        <section id="contact" className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white border-blue-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your..email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-300 focus:border-blue-300 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-300 focus:ring-blue-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-gray-300 focus:border-blue-300 focus:ring-blue-200 resize-none"
                  rows={4}
                />
              </div>
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-green-300 to-green-200 text-gray-800 hover:from-green-400 hover:to-green-300 border-0">
                  Send Message
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      Preview
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Message Preview</DialogTitle>
                      <DialogDescription>
                        Review your message before sending.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3 py-4">
                      <p><span className="font-semibold">Email:</span> {email || 'Not provided'}</p>
                      <p><span className="font-semibold">Service:</span> {service || 'Not selected'}</p>
                      <p><span className="font-semibold">Message:</span> {message || 'Not provided'}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </form>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-gray-800 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; WebDev Finals Act 2</p>
            <p>Deployed by Charles De Luna using Vercel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}