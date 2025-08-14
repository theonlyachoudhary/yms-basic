import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Heart, ArrowLeft, Calendar, Star, Map } from 'lucide-react'
import Link from "next/link"

export default function ProgramsPage() {
  const programs = [
    {
      age: "5-7",
      title: "Little Champions",
      subtitle: "Building Confidence Through Play",
      description: "Our youngest athletes explore different sports through fun, Islamic-centered activities that build confidence and character.",
      boysColor: "#FFD166",
      girlsColor: "#FFB5A7",
      duration: "45 minutes",
  // groupSize removed
      image: "/placeholder.svg?height=300&width=400&text=Little+Champions+Program",
      subCamps: [
        {
          name: "Girls Basketball",
          description: "Our camp kicks off in less than a week! Don’t miss out on this unique opportunity for your little one to grow in a fun and faith-based environment led by Coach Kulsoom, Insha’Allah.",
          schedule: "Sundays, Aug 9 – Sep 13",
          price: "Ackerman Sports & Fitness Center",
          registerLink: "https://youthmuslimsports.fillout.com/gybb",
          fee: "110"
        },
        {
          name: "Boys Soccer",
          description: "The Fall Boys Soccer Camp (Ages 5–7) kicks off Aug 23 with 5 Saturdays of skill-building and active fun, led by Coach Yaqub Biese InshaAllah!",
          schedule: "Saturdays, Aug 23 – Sep 27",
          price: "Spring Ave Recreation Center",
          registerLink: "https://youthmuslimsports.fillout.com/fybs",
          fee: "110"
        }
      ]
    },
    {
      age: "8-10",
      title: "Rising Stars", 
      subtitle: "Developing Skills and Teamwork",
      description: "Children develop fundamental skills in specific sports while learning Islamic sportsmanship and teamwork.",
      boysColor: "#2DB5A8",
      girlsColor: "#74D3CE",
      duration: "60 minutes",
  // groupSize removed
      image: "/placeholder.svg?height=300&width=400&text=Rising+Stars+Program",
      subCamps: [
        {
          name: "Boys Tennis",
          description: "Serve it. Smash it. Love it. This season join Coach Farhan Shariff, a passionate player and proven winner, on the court for TWO exciting tennis camps designed just for our youth.",
          schedule: "Fridays, Aug 29 – Sep 26",
          price: "Madison Meadows Tennis Courts",
          registerLink: "https://youthmuslimsports.fillout.com/sbyt",
          fee: "150"
        },
        {
          name: "Girls Soccer",
          description: "YMS is bringing the heat to the pitch to cap off the summer! This fun and passionate soccer camp led by Coach Nadine is designed for girls ages 8–10, focusing on skill-building, teamwork, and confidence in a supportive, faith-filled environment, Insha’Allah.",
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Spring Ave Recreation Center",
          registerLink: "https://youthmuslimsports.fillout.com/sfgs",
          fee: "110"
        },
        {
          name: "Boys Soccer",
          description: "Join our Fall Boys Soccer Camp, just for boys ages 8–10! Coach Yaqub Biese guides young athletes in skills, teamwork, and character, Insha'Allah.",
          schedule: "Sundays, Aug 24 – Sep 28",
          price: "Sunset Knoll Recreation Center",
          registerLink: "https://youthmuslimsports.fillout.com/fbks",
          fee: "110"
        },
        {
          name: "Boys Basketball",
          description: "Dribble, shoot, and score with friends in a high-energy environment.",
          schedule: "Saturdays, Sep 6 – Oct 12",
          price: "Ackerman Sports & Fitness Center",
          registerLink: "https://youthmuslimsports.fillout.com/fbbb",
          fee: "110"
        },
        {
          name: "Girls Basketball",
          description: "Ready to play confident and strong? Girls ages 8–10 train on the court to improve their game and character, Insha'Allah!",
          schedule: "Sundays, Aug 3 – Sep 12",
          price: "Ackerman Sports & Fitness Center",
          registerLink: "https://youthmuslimsports.fillout.com/gkbb",
          fee: "110"
        },
        {
          name: "Girls Volleyball",
          description: "Get ready to jump, serve, and have a blast! YMS is hosting a fun-packed volleyball camp for girls ages 8–10, where young athletes will learn the fundamentals, boost confidence, and make new friends, all while having an unforgettable time on the court Insha’Allah.",
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Ackerman Sports & Fitness Center",
          registerLink: "https://youthmuslimsports.fillout.com/syvb",
          fee: "150"
        }
      ]
    },
    {
      age: "11-13",
      title: "Future Leaders",
      subtitle: "Advanced Skills with Leadership",
      description: "Pre-teens master sport-specific techniques while developing leadership qualities rooted in Islamic principles.",
      boysColor: "#2C5E44",
      girlsColor: "#C97A97", 
      duration: "75 minutes",
  // groupSize removed
      image: "/placeholder.svg?height=300&width=400&text=Future+Leaders+Program",
      subCamps: [
        {
          name: "Boys Tennis",
          description: "Serve it. Smash it. Love it. This season join Coach Farhan Shariff, a passionate player and proven winner, on the court for TWO exciting tennis camps designed just for our youth.",
          schedule: "Fridays, Aug 29 – Sep 26",
          price: "Madison Meadows Tennis Courts",
          registerLink: "https://youthmuslimsports.fillout.com/sbts",
          fee: "150"
        },
        {
          name: "Boys Soccer",
          description: "Train this fall with Coach Yaqub Biese! This performance-focused soccer camp is designed for boys ages 11–13, offering an empowering blend of skill development and faith-based encouragement, Insha'Allah.",
          schedule: "Sundays, Aug 24 – Sep 28",
          price: "Sunset Knoll Recreation Center",
          registerLink: "https://youthmuslimsports.fillout.com/fbts",
          fee: "110"
        },
        {
          name: "Girls Volleyball",
          description: "Step onto the court and elevate your game! Join YMS for a dynamic volleyball camp where girls ages 11–13 will spike, serve, and block like pros while building confidence, teamwork, and leadership in a fun, faith-filled environment, Insha’Allah.",
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Ackerman Sports & Fitness Center",
          registerLink: "https://youthmuslimsports.fillout.com/sfvb",
          fee: "110"
        }
      ]
    },
  // Elite Athletes section removed
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
            Sport-Specific Programs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Choose from our specialized sports camps designed to develop both athletic excellence and Islamic character at every age level.
          </p>
          {/* Navigation Tags */}
          <div className="flex flex-wrap gap-3 mt-8 justify-start">
            {programs.map((program) => (
              <a
                key={program.title}
                href={`#${program.title.replace(/\s+/g, '-')}`}
                className="focus:outline-none"
              >
                <Badge
                  className="text-lg px-5 py-2 font-oswald cursor-pointer hover:bg-teal-600 hover:text-white transition-colors"
                  style={{ backgroundColor: program.boysColor, color: '#fff' }}
                >
                  {program.title}
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div key={index} id={program.title.replace(/\s+/g, '-')}> 
                {/* Age Group Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Badge 
                      className="text-white font-semibold text-xl px-6 py-3"
                      style={{ backgroundColor: program.boysColor }}
                    >
                      Ages {program.age}
                    </Badge>
                    <div className="flex gap-2">
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: program.boysColor }}
                        title="Boys Programs"
                      ></div>
                      <div 
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: program.girlsColor }}
                        title="Girls Programs"
                      ></div>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 font-oswald">
                    {program.title}
                  </h2>
                  <p className="text-2xl text-teal-600 font-semibold mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                    {program.description}
                  </p>
                </div>
                {/* Sub-camps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {program.subCamps.map((camp, campIndex) => (
                    <Card key={campIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge 
                            className="text-white font-semibold"
                            style={{ 
                              backgroundColor: campIndex % 2 === 0 ? program.boysColor : program.girlsColor 
                            }}
                          >
                            {camp.name}
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-slate-800 group-hover:text-teal-600 transition-colors">
                          {camp.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 pb-32">
                        <p className="text-slate-600">
                          {camp.description}
                        </p>
                        {/* Info and button appear normally after description */}
                        <div className="absolute left-0 bottom-0 w-full flex flex-col gap-4 px-6 pb-6 pt-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-teal-600" />
                              <span className="text-slate-600">{camp.schedule}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Map className="h-8 w-8 text-teal-600" />
                              <span className="text-slate-600">{camp.price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-teal-600" />
                              <span className="text-slate-600">{camp.fee}</span>
                            </div>
                          </div>
                          {camp.registerLink ? (
                            <Link href={camp.registerLink} passHref legacyBehavior>
                              <Button 
                                className="w-full hover:bg-teal-600 hover:text-white transition-colors"
                                variant="outline"
                              >
                                Register
                              </Button>
                            </Link>
                          ) : (
                            <Button 
                              className="w-full hover:bg-teal-600 hover:text-white transition-colors"
                              variant="outline"
                            >
                              Register
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Program Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-oswald">
              Why Choose Sport-Specific Training?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our specialized camps allow children to develop deep expertise while maintaining Islamic values
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-oswald">
                  Skill Mastery
                </h3>
                <p className="text-slate-600">
                  Focused training in specific sports leads to faster skill development and deeper understanding of the game.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-oswald">
                  Peer Connection
                </h3>
                <p className="text-slate-600">
                  Children bond with others who share their passion for the same sport, creating lasting friendships.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 font-oswald">
                  Character Building
                </h3>
                <p className="text-slate-600">
                  Each sport teaches unique lessons about perseverance, teamwork, and Islamic sportsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
