import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, ArrowLeft, Award, BookOpen, Target } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Islamic Foundation",
      description: "Every program is built on Islamic principles, incorporating du&#39;a, Islamic manners, and character development into athletic training."
    },
    {
      icon: Shield,
      title: "Safe Environment", 
      description: "We maintain strict guidelines for modest dress, appropriate interaction, and create a secure space for Muslim youth to thrive."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering connections between Muslim families while building a supportive network that extends beyond sports."
    },
    {
      icon: Star,
      title: "Excellence in All",
      description: "We strive for excellence in athletics, academics, and Islamic character, preparing youth for success in all aspects of life."
    }
  ]

  const team = [
    {
      name: "Ahmed Hassan",
      role: "Founder & Director",
      credentials: "Former College Soccer Player, Islamic Studies Graduate",
      image: "/placeholder.svg?height=300&width=300&text=Ahmed+Hassan",
      bio: "Ahmed founded YMS Sports with a vision to provide Muslim youth with high-quality athletic training in an Islamic environment."
    },
    {
      name: "Fatima Al-Zahra",
      role: "Girls Program Director", 
      credentials: "Certified Youth Coach, Mother of 3",
      image: "/placeholder.svg?height=300&width=300&text=Fatima+Al-Zahra",
      bio: "Fatima brings 8 years of youth coaching experience and a passion for empowering young Muslim women through sports."
    },
    {
      name: "Omar Abdullah",
      role: "Boys Program Director",
      credentials: "Former Professional Athlete, Youth Development Specialist", 
      image: "/placeholder.svg?height=300&width=300&text=Omar+Abdullah",
      bio: "Omar combines his professional sports background with Islamic education to mentor young Muslim men."
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "1,200+", label: "Youth Served" },
    { number: "5", label: "Years of Excellence" },
    { number: "15+", label: "Qualified Coaches" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-slate-800">
                <span className="text-teal-600">YMS</span> Sports
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Home</Link>
                <Link href="/programs" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Programs</Link>
                <Link href="/about" className="text-teal-600 px-3 py-2 text-sm font-medium">About</Link>
                <Link href="/contact" className="text-slate-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Contact</Link>
              </div>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700">Register Now</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About YMS Sports
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Empowering Muslim youth through sports while nurturing Islamic values, character, and community bonds since 2019.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Building Champions in Faith and Sport
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                YMS Sports was founded with a simple yet powerful vision: to provide Muslim youth with exceptional athletic training while maintaining and strengthening their Islamic identity.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We believe that sports can be a powerful tool for character development, community building, and spiritual growth when approached with Islamic principles at the foundation.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-teal-600" />
                  <span>Islamic Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-teal-600" />
                  <span>Athletic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-teal-600" />
                  <span>Character Building</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=YMS+Sports+Mission"
                alt="YMS Sports mission"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-teal-200 to-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything we do is guided by these fundamental principles that shape our programs and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated professionals who combine athletic expertise with Islamic knowledge to guide our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-teal-600 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      {member.credentials}
                    </p>
                    <p className="text-slate-600">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-xl leading-relaxed mb-6">
              YMS Sports began in 2019 when founder Ahmed Hassan noticed a gap in youth sports programs that truly understood and catered to Muslim families. As a former college athlete and father of three, Ahmed saw firsthand how traditional sports programs often conflicted with Islamic values and family priorities.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What started as informal weekend soccer sessions at the local masjid quickly grew into a comprehensive sports program serving hundreds of Muslim families across the community. Parents appreciated having a place where their children could develop athletically while strengthening their Islamic identity.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, YMS Sports operates multiple programs across different age groups, with certified coaches who understand both athletic development and Islamic education. We&#39;ve helped dozens of young athletes earn scholarships while maintaining their commitment to Islamic principles.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our vision extends beyond just sports – we&#39;re building a generation of confident, capable Muslim leaders who excel in all aspects of life while staying true to their faith and values.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Become part of a community that values both athletic excellence and Islamic character development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Register Your Child
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
