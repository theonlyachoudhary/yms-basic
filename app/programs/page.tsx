import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Trophy, Heart, ArrowLeft, Calendar, Star } from 'lucide-react'
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
          description: "Basketball program for girls at Ackerman Sports & Fitness Center",
          focus: [
            "Dribbling basics",
            "Shooting form",
            "Passing & catching",
            "Listening skills",
            "Playing as a team"
          ],
          schedule: "Sundays, Aug 9 – Sep 14",
          price: "Ackerman Sports & Fitness Center",
          note: "🚨Deadline Aug 16"
        },
        {
          name: "Boys Soccer",
          description: "Soccer program for boys at Spring Ave Recreation Center",
          focus: [
            "Dribbling",
            "Kicking technique",
            "Following rules",
            "Sharing the ball",
            "Sportsmanship"
          ],
          schedule: "Saturdays, Aug 23 – Sep 27",
          price: "Spring Ave Recreation Center"
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
          description: "Tennis program for boys at Madison Meadows Tennis Courts",
          focus: [
            "Forehand & backhand",
            "Rallying",
            "Serving basics",
            "Court movement",
            "Respect for opponents"
          ],
          schedule: "Fridays, Aug 29 – Sep 26",
          price: "Madison Meadows Tennis Courts"
        },
        {
          name: "Girls Soccer",
          description: "Soccer program for girls at Spring Ave Recreation Center",
          focus: [
            "Dribbling",
            "Passing",
            "Shooting",
            "Defending",
            "Encouraging teammates"
          ],
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Spring Ave Recreation Center"
        },
        {
          name: "Boys Soccer",
          description: "Soccer program for boys at Sunset Knoll Recreation Center",
          focus: [
            "Ball control",
            "Passing accuracy",
            "Shooting technique",
            "Defensive positioning",
            "Teamwork"
          ],
          schedule: "Sundays, Aug 24 – Sep 28",
          price: "Sunset Knoll Recreation Center"
        },
        {
          name: "Boys Basketball",
          description: "Basketball program for boys at Ackerman Sports & Fitness Center",
          focus: [
            "Dribbling under pressure",
            "Layups & shooting",
            "Passing in motion",
            "Defensive stance",
            "Game rules"
          ],
          schedule: "Saturdays, Sep 6 – Oct 12",
          price: "Ackerman Sports & Fitness Center",
          note: "Early Bird Code: bbeb"
        },
        {
          name: "Girls Volleyball",
          description: "Volleyball program for girls at Ackerman Sports & Fitness Center",
          focus: [
            "Underhand serve",
            "Bumping & setting",
            "Court awareness",
            "Calling the ball",
            "Supporting teammates"
          ],
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Ackerman Sports & Fitness Center",
          note: "Early Bird Code: Yveb"
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
          description: "Tennis program for boys at Madison Meadows Tennis Courts",
          focus: [
            "Serve technique",
            "Forehand/backhand consistency",
            "Net play",
            "Match scoring",
            "Sportsmanship"
          ],
          schedule: "Fridays, Aug 29 – Sep 26",
          price: "Madison Meadows Tennis Courts"
        },
        {
          name: "Boys Soccer",
          description: "Soccer program for boys at Sunset Knoll Recreation Center",
          focus: [
            "Advanced dribbling",
            "Passing under pressure",
            "Shooting accuracy",
            "Defensive tactics",
            "Game strategy"
          ],
          schedule: "Sundays, Aug 24 – Sep 28",
          price: "Sunset Knoll Recreation Center"
        },
        {
          name: "Girls Volleyball",
          description: "Volleyball program for girls at Ackerman Sports & Fitness Center",
          focus: [
            "Overhand serve",
            "Setting & spiking",
            "Rotations",
            "Team communication",
            "Game rules"
          ],
          schedule: "Sundays, Sep 7 – Oct 5",
          price: "Ackerman Sports & Fitness Center",
          note: "Early Bird Code: gveb"
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
            {programs.map((program, idx) => (
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
                    <Card key={campIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
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
                      <CardContent className="space-y-4">
                        <p className="text-slate-600">
                          {camp.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600">{program.duration}</span>
                          </div>
                          {/* groupSize removed from display */}
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600 text-xs">{camp.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600 font-semibold">{camp.price}</span>
                          </div>
                        </div>
                        {/* Focus Areas section removed */}
                        <Button 
                          className="w-full hover:bg-teal-600 hover:text-white transition-colors"
                          variant="outline"
                        >
                          Register for {camp.name}
                        </Button>
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
                  <Trophy className="h-8 w-8 text-teal-600" />
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
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-oswald">
            Find Your Child&#39;s Perfect Sport
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            With over 20 specialized camps across all age groups, we have the perfect program for every young athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Schedule a Trial Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
