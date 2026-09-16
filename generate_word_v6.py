import docx
import docx.opc.constants
import docx.oxml.shared

from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

def add_hyperlink(paragraph, url, text):
    """
    A function that places a hyperlink within a paragraph object.
    """
    part = paragraph.part
    r_id = part.relate_to(url, docx.opc.constants.RELATIONSHIP_TYPE.HYPERLINK, is_external=True)

    hyperlink = docx.oxml.shared.OxmlElement('w:hyperlink')
    hyperlink.set(docx.oxml.shared.qn('r:id'), r_id)

    new_run = docx.oxml.shared.OxmlElement('w:r')
    rPr = docx.oxml.shared.OxmlElement('w:rPr')

    c = docx.oxml.shared.OxmlElement('w:color')
    c.set(docx.oxml.shared.qn('w:val'), "0563C1")
    rPr.append(c)

    u = docx.oxml.shared.OxmlElement('w:u')
    u.set(docx.oxml.shared.qn('w:val'), 'single')
    rPr.append(u)

    new_run.append(rPr)

    text_elem = docx.oxml.shared.OxmlElement('w:t')
    text_elem.text = text
    new_run.append(text_elem)

    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)

    return hyperlink


# -------------------------------------------------
# Component Data (sourced from index.ts files)
# -------------------------------------------------

galleries = [
    ("01", "Dynamic Masonry",       "Masonry Layout"),
    ("02", "Bento Editorial",       "Asymmetric Grid"),
    ("03", "Hover Accordion",       "Flex Panel Expansion"),
    ("04", "Filterable Portfolio",  "State-Driven Grid"),
    ("05", "Polaroid Scatter",      "Interactive Stack"),
    ("06", "Horizontal Snap",       "Scroll Track"),
    ("07", "Sticky Split",          "Split Screen"),
    ("08", "Organic Bubbles",       "Overlapping Pills"),
    ("09", "Thumbnail Hero",        "E-commerce Showcase"),
    ("10", "Skewed Editorial",      "Dynamic Grid"),
    ("11", "3D Coverflow",          "Interactive Depth"),
    ("12", "Inspiration Board",     "Pinterest Columns"),
    ("13", "Global Expeditions",    "Fullscreen Crossfade"),
    ("14", "Expandable Grid",       "Inline Details"),
    ("15", "Zig-Zag Journey",       "Asymmetric Scroll"),
    ("16", "Infinite Marquee",      "Seamless Track"),
    ("17", "Mouse Parallax",        "Dynamic Shifts"),
    ("18", "Spotlight Focus",       "Dimmer Effect"),
    ("19", "Offset Staircase",      "Diagonal Flow"),
    ("20", "Triptych Split",        "Three Panels"),
    ("21", "Honeycomb Grid",        "CSS Clip-Path"),
    ("22", "Card Deck Stack",       "Z-Index Carousel"),
    ("23", "Expanding Row",         "Flex-Grow Hover"),
    ("24", "Infinite Canvas",       "Draggable Space"),
    ("25", "Diagonal Split",        "Hover Expansion"),
    ("26", "Perspective Wall",      "3D CSS Corridor"),
    ("27", "Orbital Ring",          "Circular Rotation"),
    ("28", "Hotspot Map",           "Interactive Pins"),
    ("29", "Vertical Opposites",    "Split Scroll"),
    ("30", "Polaroid Board",        "Interactive Scatter"),
    ("31", "Diamond Grid",          "Rotated Transform"),
    ("32", "Vertical Accordion",    "Y-Axis Flex Grow"),
    ("33", "Absolute Chaos",        "Scattered Z-Index"),
    ("34", "Hover Swap",            "Text-to-Image Link"),
    ("35", "Mask Reveal",           "CSS Circle Clip"),
    ("36", "Cinematic Filmstrip",   "Horizontal Timeline"),
    ("37", "Concentric Radial",     "Orbiting Rings"),
    ("38", "Center Cutout",         "Grid Editorial Focus"),
    ("39", "Dual Expand",           "Split Hover Shift"),
    ("40", "Floating Hexagons",     "CSS Float Animation"),
    ("41", "Typographic Focus",     "Hover Text Reveal"),
    ("42", "Waterfall Columns",     "Infinite Opposing Scroll"),
    ("43", "Isometric Plane",       "3D CSS Grid Projection"),
    ("44", "Vertical Tabs",         "Accordion Navigation"),
    ("45", "Scrapbook Stack",       "Scattered Interactive Pile"),
    ("46", "Horizontal Track",      "Hover Expansion"),
    ("47", "Tri-Force Split",       "3-Way Clip Path"),
    ("48", "Floating Frame",        "Thumbnail Orbit Swaps"),
    ("49", "CSS Masonry",           "True Columns Layout"),
    ("50", "Glitch Reveal",         "RGB Split Hover"),
    ("51", "Cursor Spotlight",      "Radial Gradient Mask"),
    ("52", "Staggered Zig-Zag",     "Margin Displacement"),
    ("53", "Card Fan",              "Stack Expansion"),
    ("54", "Magnifying Loupe",      "Cursor Tracking Zoom"),
    ("55", "Bento Swap",            "Hover Hero Clip-Path"),
    ("56", "Expanding Flex",        "Accordion Panels"),
    ("57", "Sticky Scroll",         "Vertical Stack Parallax"),
    ("58", "Vertical Slices",       "Hover Scatter"),
    ("59", "Film Roll",             "Vertical Infinite Reel"),
    ("60", "Mondrian Grid",         "Asymmetrical CSS Grid"),
    ("61", "Magazine Spread",       "Editorial Layout"),
    ("62", "Hover Focus Blur",      "CSS Blur Filters"),
    ("63", "Snap Scroll",           "CSS Scroll Snapping"),
    ("64", "Quadrant Expand",       "Dynamic CSS Grid Tracks"),
    ("65", "Diagonal Marquee",      "Rotated Infinite Scroll"),
    ("66", "3D Orbit",              "CSS RotateY Animations"),
    ("67", "Global Spotlight",      "Mouse Tracker Mask"),
    ("68", "Alternating Sticky",    "CSS Position Sticky"),
    ("69", "3D Flip Grid",          "CSS Backface Visibility"),
    ("70", "The Dial Marquee",      "Circular Infinite Orbit"),
]

navbars = [
    ("01", "Milky Way",            "Component 11"),
    ("02", "All News",             "Component 46"),
    ("03", "EasWorks",             "Component 47"),
    ("04", "Monogram",             "Component 48"),
    ("05", "Object3D",             "Component 49"),
    ("06", "NeoVR",                "Component 51"),
    ("07", "Wallet US",            "Component 52"),
    ("08", "Rigxr",                "Component 53"),
    ("09", "Full Paint",           "Component 54"),
    ("10", "The Types",            "Component 57"),
    ("11", "PUPSS Amber",          "Component 58"),
    ("12", "PUPSS Profile",        "Component 59"),
    ("13", "Skinloves",            "Component 61"),
    ("14", "Arizona Coffee",       "Component 250"),
    ("15", "Designmes",            "Frame"),
    ("16", "Rozes Shop",           "Header"),
    ("17", "Healthy Ways",         "Navbar"),
    ("18", "GrandMas",             "NavBar (1)"),
    ("19", "Modern Wear",          "Navbar-1"),
    ("20", "Moras Ranking",        "NavBar-1 (2)"),
    ("21", "Nova'84",              "Navbar-2"),
    ("22", "BigDesigner",          "NavBar-2 (3)"),
    ("23", "Love and Wear",        "Navbar-3"),
    ("24", "Menu Cart",            "Navbar-4"),
    ("25", "One and Only Drinks",  "Navbar-5"),
    ("26", "Homestyle",            "Navbar-6"),
    ("27", "Photoroom",            "Navigation"),
    ("28", "Lumina AI",            "Floating Glass"),
    ("29", "Vogue Design",         "Split Centered"),
    ("30", "Zenith Sidebar",       "Vertical Navigation"),
    ("31", "Tech-X Mega",          "Mega Menu"),
    ("32", "Infinity Bottom",      "Bottom Navigation"),
    ("33", "Overlay Portfolio",    "Full-Screen Menu"),
    ("34", "iFluid",               "Dynamic Island"),
    ("35", "CoinEdge",             "Web3 Header"),
    ("36", "SoftBase",             "Neumorphic UI"),
    ("37", "MacSys",               "Glassmorphism"),
    ("38", "RetroBlock",           "Neo-Brutalism"),
    ("39", "EduPath",              "Progress Bar Nav"),
    ("40", "HomeFindr",            "Integrated Search"),
    ("41", "ConnectX",             "Icon-Only Header"),
    ("42", "QuickBite",            "Location-First Split"),
    ("43", "CyberPlay",            "Cyberpunk Geometry"),
    ("44", "DailyPulse",           "Double-Deck Ticker"),
    ("45", "DevStream",            "Command Palette Docs"),
    ("46", "AdminPro",             "Collapsible Left Sidebar"),
    ("47", "ShopRight",            "Off-Canvas Drawer (Cart)"),
    ("48", "GlobeTrotter",         "Multi-Language and Currency Header"),
    ("49", "SoundWave",            "Audio Player Integrated Header"),
    ("50", "TYPEFace",             "Hero-Sized Typographic Header"),
    ("51", "RewardMe",             "Gamification Header"),
    ("52", "ClearView",            "Accessibility-First Header"),
    ("53", "SmartScroll",          "Contextual Auto-Hide Menu"),
]

heroes = [
    ("01", "SaaS Platform",             "Hero Section"),
    ("02", "Creative Studio",           "Hero Section"),
    ("03", "Health and Wellness",       "Hero Section"),
    ("04", "Travel Discovery",          "Hero Section"),
    ("05", "Developer Tools",           "Hero Section"),
    ("06", "Fashion Commerce",          "Hero Section"),
    ("07", "Education Platform",        "Hero Section"),
    ("08", "AI Assistant",              "Hero Section"),
    ("09", "Interior Design",           "Hero Section"),
    ("10", "Financial Platform",        "Hero Section"),
    ("11", "Event Platform",            "Hero Section"),
    ("12", "Community",                 "Hero Section"),
    ("13", "Food Delivery",             "Hero Section"),
    ("14", "Sustainability",            "Hero Section"),
    ("15", "Cybersecurity",             "Hero Section"),
    ("16", "Mobile App",                "Hero Section"),
    ("17", "Personal Brand",            "Hero Section"),
    ("18", "Real Estate",               "Hero Section"),
    ("19", "Professional Services",     "Hero Section"),
    ("20", "Product Launch",            "Hero Section"),
    ("21", "E-Sports / Gaming",         "Hero Section"),
    ("22", "Streaming Service",         "Hero Section"),
    ("23", "Job Board / Recruitment",   "Hero Section"),
    ("24", "Crypto / Web3",             "Hero Section"),
    ("25", "Fitness and Gym",           "Hero Section"),
    ("26", "Podcast / Audio Platform",  "Hero Section"),
    ("27", "Photography Portfolio",     "Hero Section"),
    ("28", "Single Product (Hardware)", "Hero Section"),
    ("29", "Local Services (B2C)",      "Hero Section"),
    ("30", "Non-Profit / Charity",      "Hero Section"),
    ("31", "Data Analytics",            "Hero Section"),
    ("32", "Fine Dining / Cafe",        "Hero Section"),
    ("33", "Automobile / EV",           "Hero Section"),
    ("34", "B2B Video Hosting",         "Hero Section"),
    ("35", "Art / Museum",              "Hero Section"),
    ("36", "Logistics / Package Tracking", "Hero Section"),
    ("37", "Newsletter / Digital Media","Hero Section"),
    ("38", "Coding Bootcamp / EdTech",  "Hero Section"),
    ("39", "VR / AR Headset",           "Hero Section"),
    ("40", "Cloud Storage / File Sharing", "Hero Section"),
    ("41", "Pet Care / Vet Services",   "Hero Section"),
    ("42", "Smart Home / IoT",          "Hero Section"),
    ("43", "Language Translator",       "Hero Section"),
    ("44", "Music Festival / Concert",  "Hero Section"),
    ("45", "Luxury Resort / Hotel",     "Hero Section"),
    ("46", "Weather / Climate Tech",    "Hero Section"),
    ("47", "Beauty / Cosmetics",        "Hero Section"),
]

carousels = [
    ("01", "Basic Slide",                          "Interaction Pattern"),
    ("02", "Multi-Slide",                          "Interaction Pattern"),
    ("03", "Scroll Snap",                          "Interaction Pattern"),
    ("04", "Infinite Loop",                        "Interaction Pattern"),
    ("05", "Autoplay",                             "Interaction Pattern"),
    ("06", "Auto-Reverse",                         "Interaction Pattern"),
    ("07", "Center Mode",                          "Interaction Pattern"),
    ("08", "Vertical Slide",                       "Interaction Pattern"),
    ("09", "Crossfade",                            "Interaction Pattern"),
    ("10", "Scale Focus",                          "Interaction Pattern"),
    ("11", "3D Coverflow",                         "Interaction Pattern"),
    ("12", "Flip",                                 "Interaction Pattern"),
    ("13", "Stack",                                "Interaction Pattern"),
    ("14", "Accordion",                            "Interaction Pattern"),
    ("15", "Thumbnail Controlled",                 "Interaction Pattern"),
    ("16", "Synced Dual Track",                    "Interaction Pattern"),
    ("17", "Progress Controlled",                  "Interaction Pattern"),
    ("18", "Mouse Wheel Controlled",               "Interaction Pattern"),
    ("19", "Story / Timed Progress",               "Interaction Pattern"),
    ("20", "Before/After Drag",                    "Interaction Pattern"),
    ("21", "Circular / Radial",                    "Interaction Pattern"),
    ("22", "Orbit",                                "Interaction Pattern"),
    ("23", "Cylinder",                             "Interaction Pattern"),
    ("24", "Fan / Deck",                           "Interaction Pattern"),
    ("25", "Depth / Z-Axis",                       "Interaction Pattern"),
    ("26", "Zoom Transition",                      "Interaction Pattern"),
    ("27", "Clip-Path Transition",                 "Interaction Pattern"),
    ("28", "Split Transition",                     "Interaction Pattern"),
    ("29", "Bidirectional Track",                  "Interaction Pattern"),
    ("30", "Streaming Continue Watching",          "Real-World Use Case"),
    ("31", "E-Commerce Swatch Catalog",            "Real-World Use Case"),
    ("32", "SaaS Interactive Feature Tour",        "Real-World Use Case"),
    ("33", "Story Segmented Micro-Reels",          "Real-World Use Case"),
    ("34", "3D Card Stack Gesture Swipe",          "Real-World Use Case"),
    ("35", "Interactive Before/After Comparison",  "Real-World Use Case"),
    ("36", "Hero Campaign Promotional Billboard",  "Real-World Use Case"),
    ("37", "Live Sports Match Center Ticker",      "Real-World Use Case"),
    ("38", "B2B Proof and Metric Testimonial",     "Real-World Use Case"),
    ("39", "Podcast and Audio Player Carousel",    "Real-World Use Case"),
    ("40", "Mobile App Feature Onboarding",        "Real-World Use Case"),
    ("41", "News Publication Breaking Ticker",     "Real-World Use Case"),
    ("42", "Real Estate Property Gallery",         "Real-World Use Case"),
    ("43", "Restaurant Menu Highlights",           "Real-World Use Case"),
    ("44", "Timeline History Slider",              "Real-World Use Case"),
    ("45", "Team Member Roster Cards",             "Real-World Use Case"),
    ("46", "Gamified Progress Map",                "Real-World Use Case"),
    ("47", "Music Album Coverflow",                "Real-World Use Case"),
    ("48", "Recipe Step-by-Step Guide",            "Real-World Use Case"),
    ("49", "Event Schedule Agenda Track",          "Real-World Use Case"),
]

processes = [
    ("01", "Horizontal Step Timeline",      "Layout Pattern"),
    ("02", "Vertical Step Timeline",        "Layout Pattern"),
    ("03", "Alternating Zig-Zag Timeline",  "Layout Pattern"),
    ("04", "Process Cards",                 "Layout Pattern"),
    ("05", "Connected Card Flow",           "Layout Pattern"),
    ("06", "Accordion Process",             "Layout Pattern"),
    ("07", "Tab-Based Process",             "Layout Pattern"),
    ("08", "Stepper Wizard",                "Layout Pattern"),
    ("09", "Progress-Bar Process",          "Layout Pattern"),
    ("10", "Circular Process",              "Layout Pattern"),
    ("11", "Cycle / Loop Process",          "Layout Pattern"),
    ("12", "S-Curve Process",               "Layout Pattern"),
    ("13", "Roadmap Process",               "Layout Pattern"),
    ("14", "Scroll-Reveal Process",         "Layout Pattern"),
    ("15", "Sticky Scroll Process",         "Layout Pattern"),
    ("16", "Before > During > After",       "Layout Pattern"),
    ("17", "Multi-Phase Process",           "Layout Pattern"),
    ("18", "Branching Decision Process",    "Layout Pattern"),
    ("19", "Flowchart Process",             "Layout Pattern"),
    ("20", "Conditional Process",           "Layout Pattern"),
    ("21", "Checklist Process",             "Layout Pattern"),
    ("22", "Status Tracker",               "Real-World Use Case"),
    ("23", "Order Tracking Process",        "Real-World Use Case"),
    ("24", "Application Tracker",           "Real-World Use Case"),
    ("25", "Booking Process",               "Real-World Use Case"),
    ("26", "Checkout Process",              "Real-World Use Case"),
    ("27", "Onboarding Process",            "Real-World Use Case"),
    ("28", "Form-Step Process",             "Real-World Use Case"),
    ("29", "Upload Process",                "Real-World Use Case"),
    ("30", "Verification Process",          "Real-World Use Case"),
    ("31", "Comparison Process",            "Real-World Use Case"),
    ("32", "Split-Screen Process",          "Real-World Use Case"),
    ("33", "Image-Led Process",             "Real-World Use Case"),
    ("34", "Video Process",                 "Real-World Use Case"),
    ("35", "Icon Journey",                  "Real-World Use Case"),
    ("36", "Number Counter Process",        "Real-World Use Case"),
    ("37", "Hover-Reveal Process",          "Real-World Use Case"),
    ("38", "Carousel Process",              "Real-World Use Case"),
    ("39", "Swipe Process",                 "Real-World Use Case"),
    ("40", "Expandable Card Process",       "Real-World Use Case"),
    ("41", "Stacked Card Process",          "Real-World Use Case"),
    ("42", "Kanban Workflow",               "Real-World Use Case"),
    ("43", "Pipeline Process",              "Real-World Use Case"),
    ("44", "Funnel Process",                "Real-World Use Case"),
    ("45", "Pyramid Process",               "Real-World Use Case"),
    ("46", "Radial Hub Process",            "Real-World Use Case"),
    ("47", "Ecosystem Process",             "Real-World Use Case"),
    ("48", "Parallel Process",              "Real-World Use Case"),
    ("49", "Merge Process",                 "Real-World Use Case"),
    ("50", "Interactive Process Simulator", "Real-World Use Case"),
    ("51", "Order Tracking Timeline",       "Real-World Use Case"),
    ("52", "Product Roadmap",               "Real-World Use Case"),
    ("53", "Subscription Onboarding Flow",  "Real-World Use Case"),
    ("54", "CI/CD Deployment Pipeline",     "Real-World Use Case"),
    ("55", "User Journey Map",              "Real-World Use Case"),
    ("56", "Loan Approval Process",         "Real-World Use Case"),
    ("57", "Player Progression",            "Real-World Use Case"),
    ("58", "Supply Chain Process",          "Real-World Use Case"),
    ("59", "Event Timeline",                "Real-World Use Case"),
    ("60", "System Architecture",           "Real-World Use Case"),
]

newsletters = [
    ("01", "Newsletter 01",          "Email Capture"),
    ("02", "Newsletter 02",          "Email Capture"),
    ("03", "Newsletter 03",          "Email Capture"),
    ("04", "Newsletter 04",          "Email Capture"),
    ("05", "Newsletter 05",          "Email Capture"),
    ("06", "Newsletter 06",          "Email Capture"),
    ("07", "Newsletter 07",          "Email Capture"),
    ("08", "Newsletter 08",          "Email Capture"),
    ("09", "Newsletter 09",          "Email Capture"),
    ("10", "Newsletter 10",          "Email Capture"),
    ("11", "Newsletter 11",          "Email Capture"),
    ("16", "Newsletter 16",          "Email Capture"),
    ("17", "Newsletter 17",          "Email Capture"),
    ("18", "Newsletter 18",          "Email Capture"),
    ("19", "Newsletter 19",          "Email Capture"),
    ("20", "Newsletter 20",          "Email Capture"),
    ("21", "Newsletter 21",          "Email Capture"),
    ("22", "Newsletter 22",          "Email Capture"),
    ("23", "Newsletter 23",          "Email Capture"),
    ("24", "Newsletter 24",          "Email Capture"),
    ("25", "Newsletter 25",          "Email Capture"),
    ("26", "Glassmorphic Popup",     "Email Capture"),
    ("27", "Minimalist Brutalism",   "Email Capture"),
    ("28", "Envelope Animation",     "Email Capture"),
    ("29", "Tech / Terminal Style",  "Email Capture"),
    ("30", "E-commerce Discount",    "Email Capture"),
    ("31", "SaaS Product Update",    "Email Capture"),
    ("32", "Creator Profile",        "Email Capture"),
    ("33", "Editorial Magazine",     "Email Capture"),
    ("34", "Travel / Hospitality",   "Email Capture"),
    ("35", "Floating Action Bar",    "Email Capture"),
]

ctas = [
    ("01", "Newsletter Signup",         "Conversion"),
    ("02", "App Download Split",        "Conversion"),
    ("03", "Interactive Pricing Trial", "Conversion"),
    ("04", "Demo Booking + Proof",      "Conversion"),
    ("05", "Lead Magnet Ebook",         "Conversion"),
    ("06", "Dual Split Action",         "Conversion"),
    ("07", "Waitlist Counter",          "Conversion"),
    ("08", "Dark Mode Banner",          "Conversion"),
    ("09", "Multi-step Onboarding",     "Conversion"),
    ("10", "Event Registration",        "Conversion"),
    ("11", "Feedback Survey Rating",    "Conversion"),
    ("12", "Minimalist Typographic",    "Conversion"),
    ("13", "Video Backdrop",            "Conversion"),
    ("14", "Feature Checkmarks",        "Conversion"),
    ("15", "E-commerce Pre-order",      "Conversion"),
    ("16", "Hover Reveal Features",     "Conversion"),
    ("17", "Talk to Sales",             "Conversion"),
    ("18", "Animated Gradient",         "Conversion"),
    ("19", "Expandable FAB",            "Conversion"),
    ("20", "Gamified Claim Reward",     "Conversion"),
    ("21", "App Rating Emojis",         "Conversion"),
    ("22", "Profile Completion",        "Conversion"),
    ("23", "Team Invite Input",         "Conversion"),
    ("24", "Browser Extension",         "Conversion"),
    ("25", "App Integrations",          "Conversion"),
    ("26", "Security 2FA Enable",       "Conversion"),
    ("27", "SaaS Quota Warning",        "Conversion"),
    ("28", "Content Paywall",           "Conversion"),
    ("29", "ROI Calculator",            "Conversion"),
    ("30", "Product Comparison",        "Conversion"),
    ("31", "Referral Link Share",       "Conversion"),
    ("32", "Promo Code Reveal",         "Conversion"),
    ("33", "Live Chat Prompt",          "Conversion"),
    ("34", "Webinar Countdown",         "Conversion"),
    ("35", "Podcast Subscribe",         "Conversion"),
    ("36", "Open Source Github",        "Conversion"),
    ("37", "Freelance Available",       "Conversion"),
    ("38", "Store Map Contact",         "Conversion"),
    ("39", "Charity Donation",          "Conversion"),
    ("40", "Real Estate Booking",       "Conversion"),
    ("41", "Course Enrollment",         "Conversion"),
    ("42", "Job Application",           "Conversion"),
    ("43", "Food Order Selector",       "Conversion"),
    ("44", "Event VIP Tiers",           "Conversion"),
    ("45", "Hacker CLI Terminal",       "Conversion"),
    ("46", "Sticky Top Banner",         "Conversion"),
    ("47", "Exit Intent Popup",         "Conversion"),
    ("48", "Region Map Contact",        "Conversion"),
    ("49", "Purchase Review",           "Conversion"),
    ("50", "Spin to Win Wheel",         "Conversion"),
]

carts = [
    ("01", "Inline Quantity Stepper", "Cart Component"),
    ("02", "Fly-to-Cart Animation", "Cart Component"),
    ("03", "Slide-Out Drawer Preview", "Cart Component"),
    ("04", "Sticky Bottom Bar", "Cart Component"),
    ("05", "Size & Color Picker Gate", "Cart Component"),
    ("06", "Persistent Mini-Cart", "Cart Component"),
    ("07", "Wishlist + Cart Dual Action", "Cart Component"),
    ("08", "Quick-Add Hover Overlay", "Cart Component"),
    ("09", "Bundle Builder", "Cart Component"),
    ("10", "Subscription Toggle", "Cart Component"),
    ("11", "Pre-order / Notify Me", "Cart Component"),
    ("12", "Quantity Dropdown Select", "Cart Component"),
    ("13", "Gift Wrap Upsell", "Cart Component"),
    ("14", "Swipe-to-Add (Mobile)", "Cart Component"),
    ("15", "Confirm Modal", "Cart Component"),
    ("16", "Add & Checkout Dual CTA", "Cart Component"),
    ("17", "Urgency Countdown Badge", "Cart Component"),
    ("18", "Social Proof Nudge", "Cart Component"),
    ("19", "Recommendation Upsell", "Cart Component"),
    ("20", "Custom Engrave / Monogram", "Cart Component"),
    ("21", "Bulk Order Input", "Cart Component"),
    ("22", "Configurable Product Builder", "Cart Component"),
    ("23", "Floating Action Button (FAB)", "Cart Component"),
    ("24", "One-Click Add", "Cart Component"),
    ("25", "Cart Item Limit Warning", "Cart Component"),
    ("26", "Digital Product / Instant Download", "Cart Component"),
    ("27", "Donation Amount Selector", "Cart Component"),
    ("28", "Event Ticket Seat Picker", "Cart Component"),
    ("29", "Food Order Customizer", "Cart Component"),
    ("30", "Auction / Place Bid", "Cart Component"),
    ("31", "Tiered Pricing", "Cart Component"),
    ("32", "Draggable Slider Donation", "Cart Component"),
    ("33", "3D Product Configurator", "Cart Component"),
    ("34", "Time-Slot / Delivery", "Cart Component"),
    ("35", "Gamified Progress", "Cart Component"),
    ("36", "Minimal Icon-Only", "Cart Component"),
    ("37", "Free Sample Choice", "Cart Component"),
    ("38", "B2B Bulk Upload", "Cart Component"),
    ("39", "Warranty Upsell", "Cart Component"),
    ("40", "Multi-Recipient Gifting", "Cart Component"),
    ("41", "Recipe Bundle", "Cart Component"),
    ("42", "Seat Map Reservation", "Cart Component"),
    ("43", "Course Enrollment", "Cart Component"),
    ("44", "Mystery Box", "Cart Component"),
    ("45", "Mixed-Currency (Points)", "Cart Component"),
    ("46", "Fundraiser Pledge", "Cart Component"),
    ("47", "Build-a-Box", "Cart Component"),
    ("48", "Augmented Reality Mock", "Cart Component"),
    ("49", "Subscribe & Save Modal", "Cart Component"),
    ("50", "Developer CLI Add-to-Cart", "Cart Component"),
]

checkouts = [
    ("01", "Single-Page Checkout", "Checkout Component"),
    ("02", "Multi-Step Wizard Checkout", "Checkout Component"),
    ("03", "Guest vs. Account Gate", "Checkout Component"),
    ("04", "Express Checkout Bar", "Checkout Component"),
    ("05", "Sidebar Order Summary", "Checkout Component"),
    ("06", "Address Autocomplete Checkout", "Checkout Component"),
    ("07", "Split Payment Checkout", "Checkout Component"),
    ("08", "Installment / BNPL Options", "Checkout Component"),
    ("09", "Promo Code & Gift Card Entry", "Checkout Component"),
    ("10", "Shipping Method Selector", "Checkout Component"),
    ("11", "Order Review & Edit", "Checkout Component"),
    ("12", "Subscription Checkout", "Checkout Component"),
    ("13", "Digital Delivery Checkout", "Checkout Component"),
    ("14", "B2B / Purchase Order Checkout", "Checkout Component"),
    ("15", "Donation Checkout", "Checkout Component"),
    ("16", "Event Ticket Checkout", "Checkout Component"),
    ("17", "Booking / Reservation Checkout", "Checkout Component"),
    ("18", "Wholesale / Bulk Checkout", "Checkout Component"),
    ("19", "Pre-order Checkout", "Checkout Component"),
    ("20", "One-Page Express Checkout", "Checkout Component"),
    ("21", "Hotel / Accommodation Checkout", "Checkout Component"),
    ("22", "Software License Checkout", "Checkout Component"),
    ("23", "Pharmacy / Prescription Checkout", "Checkout Component"),
    ("24", "Tipping / Gratuity Checkout", "Checkout Component"),
    ("25", "International / Cross-Border Checkout", "Checkout Component"),
    ("26", "Crypto / Web3 Wallet Checkout", "Checkout Component"),
    ("27", "One-Click Upsell Post-Checkout (OTO)", "Checkout Component"),
    ("28", "Multi-Shipping Address Checkout", "Checkout Component"),
    ("29", "In-Store Pickup / Curbside Checkout", "Checkout Component"),
    ("30", "Split-the-Bill (Multi-Payer) Checkout", "Checkout Component"),
    ("31", "Gift Registry / Wishlist Purchase Checkout", "Checkout Component"),
    ("32", "SaaS Free Trial with Credit Card Capture", "Checkout Component"),
    ("33", "Invoice Payment / Pay-by-Link Checkout", "Checkout Component"),
    ("34", "Flight / Airline Ticket Checkout", "Checkout Component"),
    ("35", "Car Rental / Vehicle Booking Checkout", "Checkout Component"),
    ("36", "Insurance Quote / Policy Purchase Checkout", "Checkout Component"),
    ("37", "Gaming / Micro-transaction Checkout", "Checkout Component"),
    ("38", "Real Estate Deposit / Escrow Checkout", "Checkout Component"),
    ("39", "Accessibility-First / High Contrast Checkout", "Checkout Component"),
    ("40", "Telehealth / Virtual Consultation Checkout", "Checkout Component"),
    ("41", "Trade-in / Exchange Value Checkout", "Checkout Component"),
    ("42", "Influencer / Creator Paywall Checkout", "Checkout Component"),
    ("43", "Local Delivery (Distance/Radius Based) Checkout", "Checkout Component"),
    ("44", "Anonymous / Privacy-Focused Checkout", "Checkout Component"),
    ("45", "Crowdfunding Milestone Checkout", "Checkout Component"),
    ("46", "Pay-What-You-Want Checkout", "Checkout Component"),
    ("47", "Corporate / Employee Benefits Checkout", "Checkout Component"),
    ("48", "Pet Adoption / Services Checkout", "Checkout Component"),
    ("49", "Storage / Logistics Space Booking", "Checkout Component"),
    ("50", "AI-Assisted Conversational Checkout (Chat UI)", "Checkout Component"),
]

# -------------------------------------------------
# Reference links per category
# -------------------------------------------------

gallery_links = [
    ("https://unsplash.com",       "Unsplash Image Gallery"),
    ("https://pinterest.com",      "Pinterest Masonry Grid"),
    ("https://dribbble.com",       "Dribbble Portfolio Gallery"),
    ("https://behance.net",        "Behance Project Showcase"),
    ("https://500px.com",          "500px Photo Gallery"),
    ("https://flickr.com",         "Flickr Photo Stream"),
    ("https://adobe.com/express",  "Adobe Express Gallery"),
    ("https://cargo.site",         "Cargo Portfolio Gallery"),
    ("https://squarespace.com",    "Squarespace Gallery Templates"),
    ("https://webflow.com",        "Webflow CMS Gallery"),
]

navbar_links = [
    ("https://stripe.com",         "Stripe Navigation"),
    ("https://linear.app",         "Linear App Navbar"),
    ("https://vercel.com",         "Vercel Header"),
    ("https://figma.com",          "Figma Navigation"),
    ("https://notion.so",          "Notion Sidebar Nav"),
    ("https://github.com",         "GitHub Header"),
    ("https://apple.com",          "Apple Navigation"),
    ("https://shopify.com",        "Shopify Storefront Nav"),
    ("https://airbnb.com",         "Airbnb Navigation"),
    ("https://netflix.com",        "Netflix Header"),
]

hero_links = [
    ("https://stripe.com",         "Stripe Hero"),
    ("https://linear.app",         "Linear Hero"),
    ("https://vercel.com",         "Vercel Hero"),
    ("https://figma.com",          "Figma Hero"),
    ("https://notion.so",          "Notion Hero"),
    ("https://webflow.com",        "Webflow Hero"),
    ("https://framer.com",         "Framer Hero"),
    ("https://lottiefiles.com",    "Lottie Hero"),
    ("https://supabase.com",       "Supabase Hero"),
    ("https://planetscale.com",    "PlanetScale Hero"),
]

carousel_links = [
    ("https://netflix.com",         "Netflix Video Carousel"),
    ("https://apple.com",           "Apple Product Showcase"),
    ("https://stripe.com",          "Stripe Logo Marquee"),
    ("https://airbnb.com",          "Airbnb Image Slider"),
    ("https://amazon.com",          "Amazon Product Carousel"),
    ("https://dribbble.com",        "Dribbble Portfolio Carousel"),
    ("https://tesla.com",           "Tesla Hero Slider"),
    ("https://spotify.com",         "Spotify Album Carousel"),
    ("https://hulu.com",            "Hulu Thumbnail Carousel"),
]

process_links = [
    ("https://linear.app/features", "Linear Roadmap Process"),
    ("https://stripe.com/payments", "Stripe Payment Flow"),
    ("https://github.com/features", "GitHub Workflow Timeline"),
    ("https://uber.com",            "Uber Service Steps"),
    ("https://asana.com/product",   "Asana Project Timeline"),
    ("https://shopify.com",         "Shopify Onboarding Steps"),
    ("https://vercel.com",          "Vercel Deployment Flow"),
    ("https://notion.so",           "Notion Onboarding Guide"),
]

newsletter_links = [
    ("https://thehustle.co",        "Hustle Email Capture"),
    ("https://morningbrew.com",     "Morning Brew Subscribe"),
    ("https://nytimes.com",         "NYTimes Newsletter"),
    ("https://medium.com",          "Medium Email Popup"),
    ("https://css-tricks.com",      "CSS-Tricks Sidebar Opt-in"),
    ("https://techcrunch.com",      "TechCrunch Newsletter"),
    ("https://smashingmagazine.com","Smashing Magazine Subscribe"),
    ("https://theverge.com",        "The Verge Subscription"),
]

cta_links = [
    ("https://slack.com",           "Slack Split CTA"),
    ("https://spotify.com",         "Spotify Glowing CTA"),
    ("https://notion.so",           "Notion Hero CTA"),
    ("https://vercel.com",          "Vercel Arrow CTA"),
    ("https://mailchimp.com",       "Mailchimp Conversion Block"),
    ("https://figma.com",           "Figma Banner CTA"),
    ("https://webflow.com",         "Webflow Pricing CTA"),
    ("https://discord.com",         "Discord Hero CTA"),
]

cart_links = [
    ("https://amazon.com",          "Amazon Add to Cart"),
    ("https://shopify.com",         "Shopify Cart Drawer"),
]

payment_processes = [
    ("01", "Interactive Split Payment Checkout", "Payment Process Component"),
    ("02", "SaaS Monthly/Annual Subscription", "Payment Process Component"),
    ("03", "Charity Donation Slider", "Payment Process Component"),
    ("04", "B2B Invoice Payment Link", "Payment Process Component"),
    ("05", "E-commerce Installment Plan", "Payment Process Component"),
    ("06", "Creator Patreon-style Subscription", "Payment Process Component"),
    ("07", "Political Campaign Donation", "Payment Process Component"),
    ("08", "Freelancer Quote & Payment", "Payment Process Component"),
    ("09", "Furniture Store Layaway", "Payment Process Component"),
    ("10", "Premium App Tier Selection", "Payment Process Component"),
    ("11", "Disaster Relief Fundraiser", "Payment Process Component"),
    ("12", "Consulting Services Retainer", "Payment Process Component"),
    ("13", "Car Loan Down Payment Simulator", "Payment Process Component"),
    ("14", "Gym Membership Signup", "Payment Process Component"),
    ("15", "Twitch/Youtube Tip Jar", "Payment Process Component"),
    ("16", "Law Firm Retainer Payment", "Payment Process Component"),
    ("17", "Student Tuition Payment Plan", "Payment Process Component"),
    ("18", "News Publisher Paywall", "Payment Process Component"),
    ("19", "Open Source Sponsor Tier", "Payment Process Component"),
    ("20", "Contractor Deposit Invoice", "Payment Process Component"),
    ("21", "Medical Bill Payment Plan", "Payment Process Component"),
    ("22", "Software License Renewal", "Payment Process Component"),
    ("23", "Animal Shelter Support", "Payment Process Component"),
    ("24", "Agency Project Milestone", "Payment Process Component"),
    ("25", "Travel Booking Deposit", "Payment Process Component"),
    ("26", "VPN Service Checkout", "Payment Process Component"),
    ("27", "Church Tithe & Offering", "Payment Process Component"),
    ("28", "Utility Bill Quick Pay", "Payment Process Component"),
    ("29", "Electronics Affirm-style Checkout", "Payment Process Component"),
    ("30", "Cloud Storage Upgrade", "Payment Process Component"),
    ("31", "School Fundraiser", "Payment Process Component"),
    ("32", "Tax Preparation Fee", "Payment Process Component"),
    ("33", "Jewelry Financing Plan", "Payment Process Component"),
    ("34", "Streaming Service Signup", "Payment Process Component"),
    ("35", "Museum Patron Program", "Payment Process Component"),
    ("36", "Property Management Rent Pay", "Payment Process Component"),
    ("37", "Home Remodel Staged Payments", "Payment Process Component"),
    ("38", "Dating App Premium", "Payment Process Component"),
    ("39", "Podcast Supporter", "Payment Process Component"),
    ("40", "Event Catering Deposit", "Payment Process Component"),
    ("41", "Wedding Venue Installments", "Payment Process Component"),
    ("42", "Newsletter Paid Tier", "Payment Process Component"),
    ("43", "Tree Planting Initiative", "Payment Process Component"),
    ("44", "Wholesale Order Payment", "Payment Process Component"),
    ("45", "Bootcamp Tuition Split", "Payment Process Component"),
    ("46", "Hosting Provider Checkout", "Payment Process Component"),
    ("47", "Medical Research Grant", "Payment Process Component"),
    ("48", "SaaS Enterprise Invoice", "Payment Process Component"),
    ("49", "Photography Package Split", "Payment Process Component"),
    ("50", "AI Tool Pro Plan", "Payment Process Component"),
    ("51", "Interactive Split Payment Checkout", "Payment Process Component"),
    ("52", "SaaS Monthly/Annual Subscription", "Payment Process Component"),
    ("53", "Charity Donation Slider", "Payment Process Component"),
    ("54", "B2B Invoice Payment Link", "Payment Process Component"),
    ("55", "E-commerce Installment Plan", "Payment Process Component"),
    ("56", "Creator Patreon-style Subscription", "Payment Process Component"),
    ("57", "Political Campaign Donation", "Payment Process Component"),
    ("58", "Freelancer Quote & Payment", "Payment Process Component"),
    ("59", "Furniture Store Layaway", "Payment Process Component"),
    ("60", "Premium App Tier Selection", "Payment Process Component"),
    ("61", "Disaster Relief Fundraiser", "Payment Process Component"),
    ("62", "Consulting Services Retainer", "Payment Process Component"),
    ("63", "Car Loan Down Payment Simulator", "Payment Process Component"),
    ("64", "Gym Membership Signup", "Payment Process Component"),
    ("65", "Twitch/Youtube Tip Jar", "Payment Process Component"),
    ("66", "Law Firm Retainer Payment", "Payment Process Component"),
    ("67", "Student Tuition Payment Plan", "Payment Process Component"),
    ("68", "News Publisher Paywall", "Payment Process Component"),
    ("69", "Open Source Sponsor Tier", "Payment Process Component"),
    ("70", "Contractor Deposit Invoice", "Payment Process Component"),
    ("71", "Medical Bill Payment Plan", "Payment Process Component"),
    ("72", "Software License Renewal", "Payment Process Component"),
    ("73", "Animal Shelter Support", "Payment Process Component"),
    ("74", "Agency Project Milestone", "Payment Process Component"),
    ("75", "Travel Booking Deposit", "Payment Process Component"),
    ("76", "VPN Service Checkout", "Payment Process Component"),
    ("77", "Church Tithe & Offering", "Payment Process Component"),
    ("78", "Utility Bill Quick Pay", "Payment Process Component"),
    ("79", "Electronics Affirm-style Checkout", "Payment Process Component"),
    ("80", "Cloud Storage Upgrade", "Payment Process Component"),
    ("81", "School Fundraiser", "Payment Process Component"),
    ("82", "Tax Preparation Fee", "Payment Process Component"),
    ("83", "Jewelry Financing Plan", "Payment Process Component"),
    ("84", "Streaming Service Signup", "Payment Process Component"),
    ("85", "Museum Patron Program", "Payment Process Component"),
    ("86", "Property Management Rent Pay", "Payment Process Component"),
    ("87", "Home Remodel Staged Payments", "Payment Process Component"),
    ("88", "Dating App Premium", "Payment Process Component"),
    ("89", "Podcast Supporter", "Payment Process Component"),
    ("90", "Event Catering Deposit", "Payment Process Component"),
    ("91", "Wedding Venue Installments", "Payment Process Component"),
    ("92", "Newsletter Paid Tier", "Payment Process Component"),
    ("93", "Tree Planting Initiative", "Payment Process Component"),
    ("94", "Wholesale Order Payment", "Payment Process Component"),
    ("95", "Bootcamp Tuition Split", "Payment Process Component"),
    ("96", "Hosting Provider Checkout", "Payment Process Component"),
    ("97", "Medical Research Grant", "Payment Process Component"),
    ("98", "SaaS Enterprise Invoice", "Payment Process Component"),
    ("99", "Photography Package Split", "Payment Process Component"),
    ("100", "AI Tool Pro Plan", "Payment Process Component"),
]

payment_process_links = [
    ("https://stripe.com", "Stripe Checkout reference"),
    ("https://paypal.com", "PayPal Payment reference"),
]

checkout_links = [
    ("https://stripe.com",          "Stripe Checkout"),
    ("https://shopify.com",         "Shopify Checkout"),
]

# -------------------------------------------------
# Usage generators
# -------------------------------------------------

def generate_usage(category, name, source):
    if category == 'galleries':
        return 'A "' + name + '" layout (' + source + ') for visually rich image presentations and portfolio displays.'
    elif category == 'navbars':
        return 'A "' + name + '" navigation (' + source + ') for intuitive site-wide wayfinding and user orientation.'
    elif category == 'heroes':
        return 'A "' + name + '" hero section for immediate impact and communicating the core value proposition.'
    elif category == 'carousels':
        return 'A "' + name + '" carousel (' + source + ') for cycling through visual content with user engagement.'
    elif category == 'processes':
        return 'A "' + name + '" process flow (' + source + ') to guide users through workflows step by step.'
    elif category == 'newsletters':
        return 'A "' + name + '" form (' + source + ') for capturing email subscriptions and growing an audience.'
    elif category == 'ctas':
        return 'A "' + name + '" CTA (' + source + ') designed to drive high-contrast, conversion-focused user actions.'
    elif category == 'carts':
        return 'A "' + name + '" add-to-cart component to drive high-conversion interactions.'
    elif category == 'checkouts':
        return 'A "' + name + '" checkout interface (' + source + ') for streamlined purchasing.'
    return 'General UI component usage.'

# -------------------------------------------------
# Document assembly
# -------------------------------------------------

def add_section(doc, category_id, section_title, prefix, components, links_list):
    count = len(components)
    doc.add_heading(section_title + ' (' + str(count) + ' items)', level=1)

    table = doc.add_table(rows=1, cols=4)
    table.style = 'Table Grid'

    hdr_cells = table.rows[0].cells
    headers = ['Component ID', 'Name', 'Usage', 'Real World Reference']
    for idx, text in enumerate(headers):
        hdr_cells[idx].text = text
        for paragraph in hdr_cells[idx].paragraphs:
            for run in paragraph.runs:
                run.font.bold = True

    for i, (comp_id_num, name, source) in enumerate(components):
        row_cells = table.add_row().cells
        comp_id = prefix + '-' + comp_id_num
        usage = generate_usage(category_id, name, source)

        url, desc = links_list[i % len(links_list)]

        row_cells[0].text = comp_id
        row_cells[1].text = name
        row_cells[2].text = usage

        paragraph = row_cells[3].paragraphs[0]
        add_hyperlink(paragraph, url, desc)

    doc.add_page_break()


doc = docx.Document()

# Title
title = doc.add_heading('UI Components Reference Guide', 0)
title.alignment = WD_ALIGN_PARAGRAPH.CENTER

doc.add_paragraph(
    'This document provides a complete inventory of all UI components across all categories, '
    'including component IDs, names, source patterns, usage descriptions, and clickable '
    'real-world reference links.'
)

# Summary table
doc.add_heading('Component Summary', level=1)
summary_table = doc.add_table(rows=1, cols=3)
summary_table.style = 'Table Grid'
sh = summary_table.rows[0].cells
for idx, h in enumerate(['Category', 'Count', 'Component ID Prefix']):
    sh[idx].text = h
    for p in sh[idx].paragraphs:
        for r in p.runs:
            r.font.bold = True

summary_data = [
    ('Galleries',   len(galleries),   'Gallery'),
    ('Navbars',     len(navbars),     'Navbar'),
    ('Heroes',      len(heroes),      'Hero'),
    ('Carousels',   len(carousels),   'Carousel'),
    ('Processes',   len(processes),   'Process'),
    ('Newsletters', len(newsletters), 'Newsletter'),
    ('CTAs',        len(ctas),        'CTA'),
    ('Carts',       len(carts),       'Cart'),
    ('Checkouts',   len(checkouts),   'Checkout'),
    ('Payment Processes', len(payment_processes), 'PaymentProcess'),
]
total = sum(c for _, c, _ in summary_data)

for cat, count, prefix in summary_data:
    r = summary_table.add_row().cells
    r[0].text = cat
    r[1].text = str(count)
    r[2].text = prefix + '-01 ... ' + prefix + '-' + str(count).zfill(2)

total_row = summary_table.add_row().cells
total_row[0].text = 'TOTAL'
total_row[1].text = str(total)
total_row[2].text = ''
for p in total_row[0].paragraphs:
    for r in p.runs:
        r.font.bold = True
for p in total_row[1].paragraphs:
    for r in p.runs:
        r.font.bold = True

doc.add_page_break()

# Sections
add_section(doc, 'galleries',   'Galleries',             'Gallery',    galleries,   gallery_links)
add_section(doc, 'navbars',     'Navbars',               'Navbar',     navbars,     navbar_links)
add_section(doc, 'heroes',      'Heroes',                'Hero',       heroes,      hero_links)
add_section(doc, 'carousels',   'Carousels',             'Carousel',   carousels,   carousel_links)
add_section(doc, 'processes',   'Processes',             'Process',    processes,   process_links)
add_section(doc, 'newsletters', 'Newsletters',           'Newsletter', newsletters, newsletter_links)
add_section(doc, 'ctas',        'CTAs (Call to Actions)','CTA',        ctas,        cta_links)
add_section(doc, 'carts',       'Add-to-Carts',          'Cart',       carts,       cart_links)
add_section(doc, 'checkouts',   'Checkouts',             'Checkout',   checkouts,   checkout_links)
add_section(doc, 'payment_processes', 'Payment Processes', 'PaymentProcess', payment_processes, payment_process_links)

doc.save('UI_Components_Clickable_Links.docx')
print('Successfully generated UI_Components_Clickable_Links.docx')
print('Total components: ' + str(total))
for cat, count, _ in summary_data:
    print('  ' + cat + ': ' + str(count))
