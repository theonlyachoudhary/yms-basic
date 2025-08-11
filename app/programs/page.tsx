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
      groupSize: "6-8 children",
      image: "/placeholder.svg?height=300&width=400&text=Little+Champions+Program",
      subCamps: [
        {
          name: "Multi-Sport Explorer",
          description: "Introduction to various sports through games and activities",
          focus: ["Basic motor skills", "Following instructions", "Sharing", "Islamic manners"],
          schedule: "Mon/Wed 4:00-4:45 PM",
          price: "$80/month"
        },
        {
          name: "Soccer Sprouts", 
          description: "Basic soccer skills with emphasis on fun and teamwork",
          focus: ["Ball control", "Running", "Teamwork", "Listening skills"],
          schedule: "Tue/Thu 4:00-4:45 PM",
          price: "$85/month"
        },
        {
          name: "Basketball Buddies",
          description: "Introduction to basketball through age-appropriate activities",
          focus: ["Hand-eye coordination", "Dribbling basics", "Sharing", "Taking turns"],
          schedule: "Sat 9:00-9:45 AM",
          price: "$85/month"
        },
        {
          name: "Track & Field Tots",
          description: "Running, jumping, and throwing in a fun environment",
          focus: ["Running form", "Jumping", "Throwing", "Following directions"],
          schedule: "Sat 10:00-10:45 AM", 
          price: "$80/month"
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
      groupSize: "8-10 children",
      image: "/placeholder.svg?height=300&width=400&text=Rising+Stars+Program",
      subCamps: [
        {
          name: "Soccer Academy",
          description: "Comprehensive soccer training with skill development focus",
          focus: ["Dribbling", "Passing", "Shooting", "Team strategy", "Islamic sportsmanship"],
          schedule: "Mon/Wed 5:00-6:00 PM",
          price: "$95/month"
        },
        {
          name: "Basketball Skills",
          description: "Fundamental basketball techniques and game understanding",
          focus: ["Dribbling", "Shooting form", "Defense", "Team play", "Respect for opponents"],
          schedule: "Tue/Thu 5:00-6:00 PM",
          price: "$95/month"
        },
        {
          name: "Track & Field Academy",
          description: "Introduction to track and field events with proper technique",
          focus: ["Running technique", "Long jump", "Shot put basics", "Goal setting"],
          schedule: "Sat 11:00 AM-12:00 PM",
          price: "$90/month"
        },
        {
          name: "Tennis Basics",
          description: "Tennis fundamentals in a supportive Islamic environment",
          focus: ["Racket control", "Forehand/Backhand", "Court awareness", "Patience"],
          schedule: "Fri 4:00-5:00 PM",
          price: "$100/month"
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
      groupSize: "10-12 children",
      image: "/placeholder.svg?height=300&width=400&text=Future+Leaders+Program",
      subCamps: [
        {
          name: "Elite Soccer",
          description: "Advanced soccer training with competitive preparation",
          focus: ["Advanced techniques", "Tactical awareness", "Leadership", "Tournament prep"],
          schedule: "Mon/Wed/Fri 6:00-7:15 PM",
          price: "$120/month"
        },
        {
          name: "Basketball Academy",
          description: "Competitive basketball training with character development",
          focus: ["Advanced skills", "Game strategy", "Leadership roles", "Mentoring younger players"],
          schedule: "Tue/Thu/Sat 6:00-7:15 PM", 
          price: "$120/month"
        },
        {
          name: "Track & Field Pro",
          description: "Specialized track and field training for competition",
          focus: ["Event specialization", "Competition prep", "Personal records", "Team leadership"],
          schedule: "Mon/Wed/Fri 7:30-8:45 PM",
          price: "$115/month"
        },
        {
          name: "Tennis Academy",
          description: "Competitive tennis training with Islamic character building",
          focus: ["Match play", "Strategy", "Mental toughness", "Respect and humility"],
          schedule: "Tue/Thu 6:00-7:15 PM",
          price: "$125/month"
        },
        {
          name: "Swimming Program",
          description: "Competitive swimming in gender-appropriate sessions",
          focus: ["Stroke technique", "Endurance", "Competition", "Self-discipline"],
          schedule: "Sat/Sun 2:00-3:15 PM",
          price: "$110/month"
        }
      ]
    },
    {
      age: "14-16",
      title: "Elite Athletes",
      subtitle: "Competitive Excellence with Character",
      description: "Teenagers train at elite levels while maintaining Islamic identity and preparing for scholarships.",
      boysColor: "#9B1D20",
      girlsColor: "#6A3F78",
      duration: "90 minutes", 
      groupSize: "12-15 teens",
      image: "/placeholder.svg?height=300&width=400&text=Elite+Athletes+Program",
      subCamps: [
        {
          name: "Soccer Elite",
          description: "High-level soccer training for scholarship opportunities",
          focus: ["Elite techniques", "College prep", "Leadership", "Community service"],
          schedule: "Mon/Wed/Fri 7:00-8:30 PM",
          price: "$150/month"
        },
        {
          name: "Basketball Elite", 
          description: "Competitive basketball with college recruitment focus",
          focus: ["Advanced gameplay", "Scholarship prep", "Character development", "Mentorship"],
          schedule: "Tue/Thu/Sat 7:00-8:30 PM",
          price: "$150/month"
        },
        {
          name: "Track & Field Elite",
          description: "Elite track and field training for state competitions",
          focus: ["Competition training", "Record breaking", "College recruitment", "Islamic leadership"],
          schedule: "Mon/Wed/Fri 8:45-10:15 PM",
          price: "$145/month"
        },
        {
          name: "Tennis Elite",
          description: "Tournament-level tennis training with character focus",
          focus: ["Tournament play", "Ranking improvement", "College prep", "Islamic values"],
          schedule: "Tue/Thu/Sat 7:30-9:00 PM",
          price: "$160/month"
        },
        {
          name: "Swimming Elite",
          description: "Competitive swimming for state and national competitions",
          focus: ["Elite training", "Competition strategy", "Time improvement", "Leadership"],
          schedule: "Daily 6:00-7:30 AM",
          price: "$140/month"
        },
        {
          name: "Martial Arts",
          description: "Islamic martial arts focusing on discipline and self-defense",
          focus: ["Self-defense", "Discipline", "Respect", "Physical fitness", "Islamic principles"],
          schedule: "Mon/Wed/Fri 8:00-9:30 PM",
          price: "$130/month"
        }
      ]
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
            Sport-Specific Programs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Choose from our specialized sports camps designed to develop both athletic excellence and Islamic character at every age level.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div key={index}>
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
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600">{program.groupSize}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600 text-xs">{camp.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-teal-600" />
                            <span className="text-slate-600 font-semibold">{camp.price}</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2 font-oswald">
                            <Heart className="h-4 w-4 text-pink-500" />
                            Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {camp.focus.map((item, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          className="w-full group-hover:bg-teal-600 group-hover:text-white transition-colors"
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
