import {
  Shield,
  Lock,
  Users,
  Code,
  Award,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

export const brandConfig = {
  // Brand Identity
  name: "Bencyber 100",
  tagline: "NO ACTUAL TAGLINE",
  description:
    "Specialized in digital asset recovery with industry-leading success rates and cutting-edge technology.",

  // Brand Colors (Tailwind classes)
  colors: {
    primary: "purple-500",
    primaryHover: "purple-600",
    secondary: "blue-500",
    accent: "purple-400",
    gradient: "from-purple-600 to-blue-600",
    gradientHover: "from-purple-700 to-blue-700",
  },

  // Logo/Icon
  logo: {
    icon: Shield,
    size: "h-8 w-8",
    color: "text-purple-500",
  },

  // Contact Information
  contact: {
    email: "",
    phone: "+1 (626) 664‑7065",
    address: "",
  },

  // Social Media
  socialMedia: [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      label: "Facebook",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      label: "Twitter",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/bencyber1008?igsh=dWdzN243cG5zam10&utm_source=qr",
      label: "Instagram",
    },
    {
      name: "Whatsapp",
      icon: MessageCircle,
      url: "https://wa.link/5d82h9",
      label: "Whatsapp",
    },
  ],

  // Core Services
  services: [
    {
      id: "bitcoin-recovery",
      icon: Shield,
      title: "Bitcoin Recovery",
      shortDescription:
        "Recover lost Bitcoin wallets, forgotten passwords, and inaccessible cryptocurrency assets with our specialized tools.",
      fullDescription:
        "Our Bitcoin recovery service helps clients regain access to their cryptocurrency wallets when they've lost passwords, seed phrases, or access to hardware wallets. Using advanced cryptographic techniques and specialized tools, we can recover Bitcoin and other cryptocurrencies from various wallet types.",
      features: [
        "Lost password recovery",
        "Corrupted wallet restoration",
        "Hardware wallet access",
        "Seed phrase reconstruction",
        "Multi-signature wallet recovery",
      ],
    },
    {
      id: "email-recovery",
      icon: Lock,
      title: "Email Recovery",
      shortDescription:
        "Regain access to critical email accounts with our secure, professional recovery techniques and verification processes.",
      fullDescription:
        "Our email recovery service helps clients regain access to critical email accounts that have been locked, compromised, or forgotten. We work with major email providers and use advanced authentication techniques to restore access while maintaining security and privacy.",
      features: [
        "Account verification assistance",
        "Two-factor authentication recovery",
        "Password reset facilitation",
        "Account security enhancement",
        "Data preservation during recovery",
      ],
    },
    {
      id: "social-media-recovery",
      icon: Users,
      title: "Social Media Recovery",
      shortDescription:
        "Restore access to compromised or locked social media accounts through advanced authentication bypass methods.",
      fullDescription:
        "Our social media recovery service helps clients regain access to personal and business accounts across major platforms. Whether locked out due to forgotten credentials, hacking, or platform restrictions, we can help restore your online presence.",
      features: [
        "Account ownership verification",
        "Platform-specific recovery techniques",
        "Business account prioritization",
        "Content preservation",
        "Enhanced security implementation",
      ],
    },
    {
      id: "game-accounts-recovery",
      icon: Code,
      title: "Game Accounts Recovery",
      shortDescription:
        "Recover valuable gaming accounts and digital assets with our specialized gaming platform expertise.",
      fullDescription:
        "Our game account recovery service helps gamers regain access to valuable gaming accounts and digital assets. We work with major gaming platforms to verify ownership and restore access to accounts containing years of progress and purchases.",
      features: [
        "Account ownership verification",
        "Digital asset preservation",
        "Multi-platform expertise",
        "Rapid recovery timelines",
        "Enhanced account security",
      ],
    },
    {
      id: "crypto-trading",
      icon: Award,
      title: "Crypto Trading",
      shortDescription:
        "Expert guidance on secure cryptocurrency trading practices and recovery of compromised trading accounts.",
      fullDescription:
        "Our crypto trading service provides expert guidance on secure cryptocurrency trading practices and recovery of compromised trading accounts. We help clients navigate the complex world of cryptocurrency exchanges and secure their digital assets.",
      features: [
        "Exchange account recovery",
        "Security best practices",
        "Trading platform guidance",
        "Two-factor authentication setup",
        "Cold storage solutions",
      ],
    },
  ],

  // Team Members
  team: [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former cybersecurity consultant with 15+ years of experience in digital forensics and recovery operations.",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Cryptography expert with a background in blockchain security and cryptocurrency recovery.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Recovery Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Specialized in complex account recovery and authentication bypass techniques with a 99.8% success rate.",
    },
  ],

  // Company Stats
  stats: [
    { value: 100, suffix: "%", label: "Success Rate" },
    { value: 15, suffix: "k+", label: "Completed Tasks" },
    { value: 2, suffix: "k+", label: "Satisfied Customers" },
    { value: 8, suffix: "+", label: "Years Experience" },
  ],

  // Testimonials
  testimonials: [
    {
      quote:
        "After losing access to my Bitcoin wallet worth thousands, I thought all was lost. This team recovered everything within days. Absolutely incredible service.",
      author: "Michael R.",
      role: "Crypto Investor",
    },
    {
      quote:
        "My business email was compromised and I was locked out. Their team not only recovered my account but also implemented better security measures.",
      author: "Sarah L.",
      role: "Business Owner",
    },
    {
      quote:
        "I had a gaming account with years of progress and thousands spent. When I got locked out, they recovered it within 48 hours. Worth every penny.",
      author: "James T.",
      role: "Professional Gamer",
    },
  ],

  // Company Values
  values: [
    {
      icon: Shield,
      title: "Security",
      description:
        "We maintain the highest standards of security and confidentiality in all our operations.",
    },
    {
      icon: Users,
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty in all client interactions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every recovery case we undertake.",
    },
    {
      icon: Code,
      title: "Efficiency",
      description:
        "We value your time and work diligently to complete recoveries as quickly as possible.",
    },
  ],

  // Process Steps
  process: [
    {
      step: "01",
      title: "Initial Assessment",
      description:
        "We analyze your specific situation and determine the most effective recovery approach.",
    },
    {
      step: "02",
      title: "Strategic Planning",
      description:
        "Our experts develop a customized recovery strategy tailored to your specific case.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Using proprietary tools and techniques, we implement the recovery process with precision.",
    },
    {
      step: "04",
      title: "Verification & Delivery",
      description:
        "We verify successful recovery and securely deliver access back to you with enhanced security measures.",
    },
  ],

  // FAQ
  faq: [
    {
      question: "How long does the recovery process typically take?",
      answer:
        "Recovery timelines vary based on the complexity of each case. Simple recoveries may be completed within 24-48 hours, while more complex cases might take 1-2 weeks. We provide estimated timelines during our initial assessment.",
    },
    {
      question: "Is my data safe during the recovery process?",
      answer:
        "Absolutely. We maintain strict confidentiality protocols and use secure, encrypted channels for all communications and data transfers. Your privacy and security are our top priorities.",
    },
    {
      question: "What if recovery isn't possible?",
      answer:
        "While we maintain a 100% success rate for eligible cases, if we determine that recovery isn't possible, we'll provide a detailed explanation and refund your payment according to our guarantee policy.",
    },
    {
      question: "Do you offer emergency recovery services?",
      answer:
        "Yes, we offer expedited emergency services for time-sensitive situations. Additional fees may apply for priority handling and after-hours support.",
    },
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],

  // Company Story
  story: {
    founded: "2015",
    mission:
      "Founded in 2015, SecureRecover emerged from a simple mission: to help people regain access to their valuable digital assets when all hope seemed lost.",
    growth:
      "What began as a small team of cybersecurity experts has grown into an industry-leading digital recovery firm with a global client base and an unmatched success rate.",
    expertise:
      "Our proprietary recovery techniques and tools have been developed through years of research and practical application, allowing us to solve complex recovery cases that others cannot.",
  },

  // Security Badges
  securityBadges: [
    { icon: Shield, text: "256-bit Encryption" },
    { icon: Lock, text: "Zero-Log Policy" },
    { icon: Award, text: "ISO 27001 Certified" },
  ],
};

export type BrandConfig = typeof brandConfig;
