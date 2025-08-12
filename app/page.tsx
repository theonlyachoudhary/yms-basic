import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Shield, Heart, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const ageGroups = [
    {
      age: "5-7",
      title: "Little Champions",
      description: "Building confidence through fun, sport-specific activities",
      boysColor: "#FFD166",
      girlsColor: "#FFB5A7",
      subCamps: ["Boys Soccer", "Girls Basketball"],
      image: "/placeholder.svg?height=200&width=300&text=Little+Champions+5-7"
    },
    {
      age: "8-10", 
      title: "Rising Stars",
      description: "Developing skills in specialized sports with teamwork focus",
      boysColor: "#2DB5A8",
      girlsColor: "#74D3CE",
      subCamps: ["Boys Tennis", "Boys Soccer", "Girls Soccer", "Boys Basketball","Girls Volleyball"],
      image: "/placeholder.svg?height=200&width=300&text=Rising+Stars+8-10"
    },
    {
      age: "11-13",
      title: "Future Leaders", 
      description: "Advanced sport-specific training with leadership development",
      boysColor: "#2C5E44",
      girlsColor: "#C97A97",
      subCamps: ["Boys Tennis", "Boys Soccer", "Girls Volleyball"],
      image: "/placeholder.svg?height=200&width=300&text=Future+Leaders+11-13"
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
                <Link href="/about" passHref legacyBehavior>
                  <Button size="lg" variant="outline" className="border-slate-300">
                    About Us
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-teal-600" />
                  <span>Dozens of Happy Families</span>
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
            <div className="relative flex justify-center lg:block">
              <div className="relative z-10">
                <Image
                  src="/home.webp"
                  alt="Muslim youth playing sports"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {ageGroups.map((group, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
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
                  <div className="p-6 flex flex-col flex-1 pb-20 relative">
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
                    <Link
                      href={`/programs#${group.title.replace(/\s+/g, '-')}`}
                      className="w-[calc(100%-2rem)] mx-4 absolute left-0 bottom-0 rounded-b-lg"
                      style={{ textDecoration: 'none' }}
                      scroll={true}
                    >
                      <Button
                        variant="outline"
                        className="w-full transition-colors"
                        style={{
                          borderColor: group.boysColor,
                          color: group.boysColor,
                          ...( { ['--hover-bg' as any]: group.boysColor } as any )
                        }}
                      >
                        <span
                          style={{
                            display: 'block',
                            width: '100%',
                          }}
                          className="hover:text-white"
                        >
                          View All Camps
                        </span>
                        <style>{`
                          .w-full:hover {
                            background-color: var(--hover-bg) !important;
                            color: #fff !important;
                          }
                        `}</style>
                      </Button>
                    </Link>
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
            
            {/* Image removed from More Than Just Sports section */}
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
            <Link href="/programs" passHref legacyBehavior>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-300">
                Register Your Child
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
