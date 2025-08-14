import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Star, Award, BookOpen, Target, ArrowLeft } from 'lucide-react'
import Link from "next/link"
// import Link from "next/link"


export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Islamic Foundation",
      description: "Every program is rooted in Islamic principles—integrating Islamic manners and character development into every aspect of athletic training."
    },
    {
      icon: Shield,
      title: "Islamic Environment", 
      description: "We maintain strict guidelines for modest dress, gender-separated classes, and create a secure space for Muslim youth to thrive."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Through sports, we foster connections between Muslim families while building a supportive network that extends beyond."
    },
    {
      icon: Star,
      title: "Excellence in All",
      description: "We strive for excellence in athletics, academics, and Islamic character, preparing youth for success in all aspects of life."
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
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-oswald">
            About Us
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Learn about Youth Muslim Sports, our vision, and our commitments for the future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Building Champions in Sports and the Deen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Youth Muslim Sports was founded with a clear and powerful vision—to provide Muslim youth with top-quality athletic training, skills, and community without ever compromising on our Deen.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We set out to create a safe, welcoming environment for all children—Muslim or not—where they could grow physically, mentally, and spiritually. A place where they learn not only sports, but also companionship, adab (manners), discipline, and the value of hard work.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                To achieve this, we sought coaches who reflect these values—role models who are patient, motivating, and grounded in the Sunnah. Coaches whose strength is matched by their gentleness, and whose hearts are anchored in the remembrance of Allah.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Alhamdulillah, after months of dedication, we&#39;ve built exactly that. With skilled coaches and programs for nearly every age, we continue to work tirelessly to fulfill this vital need in our community.
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
            <Link href="/programs">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Register Your Child
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
