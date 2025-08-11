import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Shield, Heart, ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function HomePage() {
  const ageGroups = [
    {
      age: "5-7",
      title: "Little Champions",
      description: "Building confidence through fun, sport-specific activities",
      boysColor: "#FFD166",
      girlsColor: "#FFB5A7",
      subCamps: ["Multi-Sport", "Soccer Basics", "Basketball Fun", "Track & Field"],
      image: "/placeholder.svg?height=200&width=300&text=Little+Champions+5-7"
    },
    {
      age: "8-10", 
      title: "Rising Stars",
      description: "Developing skills in specialized sports with teamwork focus",
      boysColor: "#2DB5A8",
      girlsColor: "#74D3CE",
      subCamps: ["Soccer Academy", "Basketball Skills", "Track & Field", "Tennis Basics"],
      image: "/placeholder.svg?height=200&width=300&text=Rising+Stars+8-10"
    },
    {
      age: "11-13",
      title: "Future Leaders", 
      description: "Advanced sport-specific training with leadership development",
      boysColor: "#2C5E44",
      girlsColor: "#C97A97",
      subCamps: ["Elite Soccer", "Basketball Academy", "Track & Field Pro", "Tennis Academy", "Swimming"],
      image: "/placeholder.svg?height=200&width=300&text=Future+Leaders+11-13"
    },
    {
      age: "14-16",
      title: "Elite Athletes",
      description: "Competitive sport-specific training with scholarship preparation",
      boysColor: "#9B1D20", 
      girlsColor: "#6A3F78",
      subCamps: ["Soccer Elite", "Basketball Elite", "Track & Field Elite", "Tennis Elite", "Swimming Elite", "Martial Arts"],
      image: "/placeholder.svg?height=200&width=300&text=Elite+Athletes+14-16"
    }
  ]

  const testimonials = [
    {
      name: "Amina Hassan",
      role: "Mother of 3",
      content: "Finally found a place where my children can be active while staying true to our values. The coaches are amazing!",
      rating: 5
    },
    {
      name: "Omar Abdullah", 
      role: "Father of 2",
      content: "My daughters love coming here. They've gained so much confidence and made wonderful friends in a safe environment.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      role: "Mother of 4", 
      content: "The Islamic values integrated into sports training is exactly what we were looking for. Highly recommend!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">
                Islamic Values • Youth Sports • Community
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 font-oswald">
                Where <span className="text-teal-600">Faith</span> Meets <span className="text-orange-500">Fitness</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Empowering Muslim youth through sports while nurturing Islamic values, character, and community bonds in a safe, supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300">
                  Watch Our Story
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-teal-600" />
                  <span>500+ Happy Families</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-600" />
                  <span>Safe Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-teal-600" />
                  <span>Islamic Values</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Muslim+Youth+Playing+Sports"
                  alt="Muslim youth playing sports"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-teal-200 to-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-oswald">
              Programs for Every Age
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored sports programs that grow with your child, from early childhood through adolescence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={group.image || "/placeholder.svg"}
                      alt={group.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className="text-white font-semibold"
                        style={{ backgroundColor: group.boysColor }}
                      >
                        Ages {group.age}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-oswald">{group.title}</h3>
                    <p className="text-slate-600 mb-4">{group.description}</p>
          
                    {/* Sub-camps list */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Available Camps:</p>
                      <div className="flex flex-wrap gap-1">
                        {group.subCamps.map((camp, campIndex) => (
                          <Badge 
                            key={campIndex}
                            variant="outline" 
                            className="text-xs"
                            style={{ 
                              borderColor: campIndex % 2 === 0 ? group.boysColor : group.girlsColor,
                              color: campIndex % 2 === 0 ? group.boysColor : group.girlsColor
                            }}
                          >
                            {camp}
                          </Badge>
                        ))}
                      </div>
                    </div>
          
                    <div className="flex gap-2 mb-4">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: group.boysColor }}
                        title="Boys Programs"
                      ></div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: group.girlsColor }}
                        title="Girls Programs"
                      ></div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-teal-50">
                      View All Camps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-oswald">
                More Than Just Sports
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We integrate Islamic values into every aspect of our programs, creating an environment where your children can excel physically while growing spiritually and morally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 font-oswald">Islamic Character Building</h3>
                    <p className="text-slate-600">Every session begins with du&#39;a and incorporates lessons on sportsmanship, respect, and Islamic adab.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 font-oswald">Safe & Modest Environment</h3>
                    <p className="text-slate-600">Gender-appropriate activities with modest dress codes and Islamic guidelines for interaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2 font-oswald">Community Connection</h3>
                    <p className="text-slate-600">Building lasting friendships with other Muslim families who share your values and aspirations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Islamic+Values+in+Sports"
                alt="Islamic values in sports"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-oswald">
              What Parents Are Saying
            </h2>
            <p className="text-xl text-slate-600">
              Hear from families who&#39;ve found their home at YMS Sports
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">&quot;{testimonial.content}&quot;</p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Give your children the gift of sports in an Islamic environment. Registration is now open for all age groups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Register Your Child
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
