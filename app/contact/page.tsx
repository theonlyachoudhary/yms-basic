import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MessageCircle, Calendar, Users } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  // contactInfo removed: phone, email, office hours

  // faqs removed

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

  {/* Contact Info Cards removed */}

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
                    {/* Email Address field removed */}
                  </div>
                  
                  <div className="space-y-2">
                    {/* Phone Number field removed */}
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
                  <Link href="/programs" passHref legacyBehavior>
                    <Button className="w-full justify-start bg-teal-600 hover:bg-teal-700">
                      <Users className="h-4 w-4 mr-2" />
                      Register for Programs
                    </Button>
                  </Link>
                  <div className="w-full flex items-center gap-2 px-4 py-2 text-slate-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>Message us on WhatsApp</span>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ section removed */}

              {/* Location elements removed */}
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
