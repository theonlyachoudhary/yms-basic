import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ArrowLeft, MessageCircle, Calendar, Users } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@ymssports.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Community Center Drive",
      subtitle: "Islamic Center of Excellence"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat-Sun: 8AM-4PM"
    }
  ]

  const faqs = [
    {
      question: "What age groups do you serve?",
      answer: "We serve children and teens from ages 5-17, with programs specifically designed for 5-7, 8-10, 11-13, and 14-16 age groups."
    },
    {
      question: "Are programs separated by gender?",
      answer: "Yes, we maintain gender-appropriate programming with separate sessions for boys and girls, especially for older age groups."
    },
    {
      question: "What sports do you offer?",
      answer: "Our programs include soccer, basketball, track and field, and general fitness activities, with seasonal variations."
    },
    {
      question: "Do you provide transportation?",
      answer: "Currently, we do not provide transportation. Parents are responsible for drop-off and pick-up."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer full refunds within the first two weeks of a session. After that, refunds are considered on a case-by-case basis."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-oswald">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Have questions about our programs? Ready to register your child? We&#39;re here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 font-oswald">
                    {info.title}
                  </h3>
                  <p className="text-slate-800 font-semibold mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-slate-500">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                    <MessageCircle className="h-6 w-6 text-teal-600" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registration">Program Registration</SelectItem>
                        <SelectItem value="information">General Information</SelectItem>
                        <SelectItem value="schedule">Schedule a Tour</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child&#39;s Age (if applicable)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-7">5-7 years old</SelectItem>
                        <SelectItem value="8-10">8-10 years old</SelectItem>
                        <SelectItem value="11-13">11-13 years old</SelectItem>
                        <SelectItem value="14-16">14-16 years old</SelectItem>
                        <SelectItem value="17+">17+ years old</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-teal-600" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700">
                    <Users className="h-4 w-4 mr-2" />
                    Register for Programs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Facility Tour
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join Our WhatsApp Group
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-slate-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-slate-800 mb-2 font-oswald">
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-100 h-48 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-slate-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Community Center Drive</p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p className="font-semibold mb-1">Islamic Center of Excellence</p>
                    <p>123 Community Center Drive</p>
                    <p>City, State 12345</p>
                    <p className="mt-2">
                      <span className="font-semibold">Parking:</span> Free parking available
                    </p>
                    <p>
                      <span className="font-semibold">Access:</span> Wheelchair accessible
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-oswald">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Don&#39;t wait – spaces fill up quickly! Register your child today and give them the gift of sports in an Islamic environment.
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  )
}
