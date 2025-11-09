"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, MessageCircle, Heart, Share2, 
  Trophy, Star, Award, TrendingUp,
  User, Calendar, Tag, ThumbsUp, BookOpen
} from "lucide-react";
import Link from "next/link";

export function CommunityFeatures() {
  const [activeTab, setActiveTab] = useState("discussions");
  
  // Mock data for community features
  const discussions = [
    {
      id: 1,
      title: "Best practices for React performance optimization",
      author: "Alex Johnson",
      avatar: "/images/avatar1.jpg",
      replies: 24,
      likes: 42,
      tags: ["React", "Performance", "JavaScript"],
      timeAgo: "2 hours ago",
      category: "Development"
    },
    {
      id: 2,
      title: "How to design better user onboarding experiences",
      author: "Sarah Chen",
      avatar: "/images/avatar2.jpg",
      replies: 18,
      likes: 36,
      tags: ["UI/UX", "Design", "Onboarding"],
      timeAgo: "5 hours ago",
      category: "Design"
    },
    {
      id: 3,
      title: "The future of AI in content creation",
      author: "Michael Rodriguez",
      avatar: "/images/avatar3.jpg",
      replies: 31,
      likes: 67,
      tags: ["AI", "Content", "Future"],
      timeAgo: "1 day ago",
      category: "Technology"
    }
  ];

  const leaderboard = [
    { id: 1, name: "Alex Johnson", points: 2450, avatar: "/images/avatar1.jpg", rank: 1 },
    { id: 2, name: "Sarah Chen", points: 2100, avatar: "/images/avatar2.jpg", rank: 2 },
    { id: 3, name: "Michael Rodriguez", points: 1890, avatar: "/images/avatar3.jpg", rank: 3 },
    { id: 4, name: "Emma Wilson", points: 1750, avatar: "/images/avatar4.jpg", rank: 4 },
    { id: 5, name: "James Peterson", points: 1620, avatar: "/images/avatar5.jpg", rank: 5 }
  ];

  const badges = [
    { id: 1, name: "Early Adopter", icon: Star, description: "Joined in the first month" },
    { id: 2, name: "Top Contributor", icon: Award, description: "100+ helpful posts" },
    { id: 3, name: "Community Leader", icon: Trophy, description: "Moderated 50+ discussions" },
    { id: 4, name: "Knowledge Seeker", icon: BookOpen, description: "Read 1000+ articles" }
  ];

  const userStats = {
    posts: 42,
    replies: 128,
    likesReceived: 342,
    badges: 3,
    rank: 12
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Community Hub
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow readers, share insights, and earn recognition
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-secondary rounded-2xl border border-border">
            {[
              { id: "discussions", label: "Discussions", icon: MessageCircle },
              { id: "leaderboard", label: "Leaderboard", icon: Trophy },
              { id: "badges", label: "Badges", icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-6 shadow-2xl"
        >
          {activeTab === "discussions" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Recent Discussions</h3>
                <Link href="/community/new-discussion">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                    Start Discussion
                  </button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <motion.div
                    key={discussion.id}
                    whileHover={{ scale: 1.02 }}
                    className="glass-light rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link href={`/community/discussion/${discussion.id}`}>
                          <h4 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                            {discussion.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <div className="flex items-center mr-4">
                            <User className="w-4 h-4 mr-1" />
                            {discussion.author}
                          </div>
                          <div className="flex items-center mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            {discussion.timeAgo}
                          </div>
                          <div className="flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            {discussion.category}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {discussion.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {discussion.replies}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Heart className="w-4 h-4 mr-1" />
                          {discussion.likes}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "leaderboard" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Community Leaderboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {leaderboard.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`glass-light rounded-2xl p-4 text-center ${
                      index === 0 ? "ring-2 ring-yellow-500" : 
                      index === 1 ? "ring-2 ring-gray-400" : 
                      index === 2 ? "ring-2 ring-amber-700" : ""
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${user.rank}`}
                    </div>
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-bold mb-1">{user.name}</h4>
                    <div className="text-sm text-muted-foreground">{user.points} pts</div>
                  </motion.div>
                ))}
              </div>
              
              {/* User Stats */}
              <div className="glass-light rounded-2xl p-6 mt-8">
                <h4 className="text-lg font-bold mb-4">Your Community Stats</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.posts}</div>
                    <div className="text-sm text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.replies}</div>
                    <div className="text-sm text-muted-foreground">Replies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.likesReceived}</div>
                    <div className="text-sm text-muted-foreground">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userStats.badges}</div>
                    <div className="text-sm text-muted-foreground">Badges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">#{userStats.rank}</div>
                    <div className="text-sm text-muted-foreground">Rank</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "badges" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Achievement Badges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {badges.map((badge) => (
                  <motion.div
                    key={badge.id}
                    whileHover={{ scale: 1.02 }}
                    className="glass-light rounded-2xl p-6 flex items-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">{badge.name}</h4>
                      <p className="text-sm text-muted-foreground">{badge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="glass-light rounded-2xl p-6 mt-6">
                <h4 className="text-lg font-bold mb-4">How to Earn Badges</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Participate in discussions to earn the Community Member badge</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide helpful answers to earn the Helper badge</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share original content to earn the Creator badge</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Invite friends to earn the Ambassador badge</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}