import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, Award, BookOpen, Target } from 'lucide-react'
// import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Islamic Foundation",
  description: "Every program is rooted in Islamic principles—integrating Islamic manners and character development into every aspect of athletic training."
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

  // const stats = [
  //   { number: "500+", label: "Happy Families" },
  //   { number: "1,200+", label: "Youth Served" },
  //   { number: "5", label: "Years of Excellence" },
  //   { number: "15+", label: "Qualified Coaches" }
  // ]


  return (
    <div className="min-h-screen bg-white">

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  )
}
