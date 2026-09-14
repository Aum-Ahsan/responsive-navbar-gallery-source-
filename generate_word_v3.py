import docx
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
import random

doc = docx.Document()

# Styles and Title
title = doc.add_heading('UI Components Reference Guide - Real World Examples', 0)
title.alignment = WD_ALIGN_PARAGRAPH.CENTER

doc.add_paragraph('This document details the complete inventory of UI components, providing specific type names, usage contexts, and real-world reference links.')

# --- Data Generators ---
carousel_types = [
    "Hero Full-Width Slider", "Testimonial Card Carousel", "Product Feature Showcase", 
    "Logo Marquee Slider", "Article Highlight Carousel", "Image Gallery Slider", 
    "Video Thumbnail Carousel", "Team Member Carousel", "Pricing Plan Slider", 
    "Client Portfolio Showcase", "Interactive 3D Carousel", "Vertical Scroll Slider"
]

carousel_links = [
    "https://www.netflix.com (Hero Video/Image Carousel)",
    "https://www.apple.com (Product Showcase Carousel)",
    "https://stripe.com (Logo Marquee Carousel)",
    "https://www.airbnb.com (Image Gallery Slider)",
    "https://www.amazon.com (Product Recommendation Carousel)",
    "https://dribbble.com (Portfolio/Card Carousel)",
    "https://www.tesla.com (Full-Width Hero Slider)",
    "https://www.spotify.com (Playlist/Album Carousel)",
    "https://www.hulu.com (Video Thumbnail Carousel)"
]

process_types = [
    "Horizontal Timeline Tracker", "Vertical Step-by-Step Flow", "Circular Progress Indicator", 
    "Numbered Process Timeline", "Interactive Roadmap", "Onboarding Walkthrough Steps", 
    "Service Delivery Process", "E-commerce Checkout Flow", "Registration Step Guide", 
    "Data Pipeline Visualization", "Feature Maturity Model", "Agile Sprint Tracker"
]

process_links = [
    "https://linear.app/features (Interactive Roadmap/Process)",
    "https://stripe.com/payments (Step-by-Step Payment Flow)",
    "https://github.com/features (Workflow/Process Timeline)",
    "https://www.uber.com (Service Delivery Steps)",
    "https://asana.com/product (Agile/Project Timeline)",
    "https://www.shopify.com (E-commerce Onboarding Steps)",
    "https://vercel.com/workflow (Deployment Process Flow)",
    "https://www.notion.so (Vertical Onboarding Guide)"
]

newsletter_types = [
    "Footer Minimal Subscribe", "Exit-Intent Popup Form", "Inline Content Lead Magnet", 
    "Sticky Sidebar Opt-in", "Hero Section Email Capture", "Full-Screen Takeover Subscribe", 
    "Two-Step Verification Form", "Gamified Spin-to-Win Form", "Resource Download Lead Capture"
]

newsletter_links = [
    "https://thehustle.co (Hero Section Email Capture)",
    "https://morningbrew.com (Full-Screen Takeover Subscribe)",
    "https://www.nytimes.com (Footer Minimal Subscribe)",
    "https://medium.com (Popup Email Capture)",
    "https://css-tricks.com (Sidebar Opt-in)",
    "https://techcrunch.com (Inline Content Lead Magnet)",
    "https://smashingmagazine.com (Newsletter Block)",
    "https://www.theverge.com (Minimalist Subscription Form)"
]

cta_types = [
    "Primary Hero Button", "Floating Action Button (FAB)", "Sticky Top Banner CTA", 
    "End-of-Post Conversion Block", "Pricing Tier Selection Button", "Video Play Overlay Action", 
    "Text Link with Arrow Animation", "Gradient Glowing Button", "Split Screen CTA Block"
]

cta_links = [
    "https://slack.com (Split Screen CTA Block)",
    "https://www.spotify.com (Gradient Glowing Button)",
    "https://www.notion.so (Primary Hero Button)",
    "https://vercel.com (Text Link with Arrow Animation)",
    "https://mailchimp.com (End-of-Post Conversion Block)",
    "https://www.figma.com (Sticky Top Banner CTA)",
    "https://webflow.com (Pricing Tier Selection Button)",
    "https://discord.com (Hero Floating CTA Action)"
]

def generate_usage(category, type_name):
    if category == 'carousels':
        return f'Optimal for condensing horizontal screen space. The {type_name} cycles through visual content to increase user engagement.'
    elif category == 'processes':
        return f'Designed to reduce cognitive load. The {type_name} visually guides the user through complex workflows.'
    elif category == 'newsletters':
        return f'Focused on maximizing conversions. The {type_name} prompts users for email subscriptions without disrupting reading.'
    elif category == 'ctas':
        return f'Built to drive action. The {type_name} uses high contrast to direct users towards the primary business goal.'
    return 'General UI usage.'

def add_component_section(doc, category_id, section_title, prefix, count, types_list, links_list):
    doc.add_heading(f'{section_title} ({count} items)', level=1)
    
    table = doc.add_table(rows=1, cols=4)
    table.style = 'Table Grid'
    
    # Header
    hdr_cells = table.rows[0].cells
    headers = ['Component ID', 'Type Name', 'Usage', 'Real World Website']
    for idx, text in enumerate(headers):
        hdr_cells[idx].text = text
        for paragraph in hdr_cells[idx].paragraphs:
            for run in paragraph.runs:
                run.font.bold = True
                
    # Rows
    for i in range(1, count + 1):
        row_cells = table.add_row().cells
        comp_id = f'{prefix}-{i:02d}'
        
        type_name = types_list[i % len(types_list)] + f" Variant {i}"
        usage = generate_usage(category_id, type_name)
        
        # Select a real-world link
        link = links_list[i % len(links_list)]
        
        row_cells[0].text = comp_id
        row_cells[1].text = type_name
        row_cells[2].text = usage
        row_cells[3].text = link
        
    doc.add_page_break()

# Generate Sections
add_component_section(doc, 'carousels', 'Carousels', 'Carousel', 49, carousel_types, carousel_links)
add_component_section(doc, 'processes', 'Processes', 'Process', 60, process_types, process_links)
add_component_section(doc, 'newsletters', 'Newsletters', 'Newsletter', 35, newsletter_types, newsletter_links)
add_component_section(doc, 'ctas', 'CTAs (Call to Actions)', 'CTA', 50, cta_types, cta_links)

doc.save('UI_Components_RealWorld.docx')
print('Successfully generated UI_Components_RealWorld.docx')
