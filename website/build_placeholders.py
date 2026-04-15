import os
import random
from datetime import datetime, timedelta

projects_dir = "src/content/projects"
blog_dir = "src/content/blog"

images = [
    "/placeholder-project.jpg",
    "/placeholder-truck.jpg",
    "/placeholder-interior.jpg",
    "/placeholder-adventure.jpg"
]

project_titles = [
    "Ev-Conversion Module",
    "Automated Hydroponics",
    "Solar Array Tracking",
    "Raspberry Pi Cluster",
    "Custom Keytop Design",
    "Lithium Bank Assembly",
    "CNC Router Build"
]

blog_titles = [
    "Winter Camping in the Rockies",
    "Desert Off-Roading Expedition",
    "Overlanding the Mojave Road",
    "High Altitude Hiking",
    "Forest Trail Run",
    "Vanlife Conversion Trip",
    "Alpine Lake Fishing"
]

os.makedirs(projects_dir, exist_ok=True)
os.makedirs(blog_dir, exist_ok=True)

base_date = datetime(2026, 4, 15)

# Generate 7 projects
for i in range(7):
    title = project_titles[i]
    date_str = (base_date - timedelta(days=i*5)).strftime("%Y-%m-%d")
    slug = title.lower().replace(" ", "-")
    cover = images[i % len(images)]
    
    content = f"""---
title: "Project: {title}"
date: {date_str}
category: "Projects"
cover_image: "{cover}"
summary: "An overview of the {title} build and execution process over the last several months."
tags: ["hardware", "software"]
---

# {title} Overview

Documentation logged here.

## Data Points

```bash
> System nominal.
```

![Reference]({images[(i+1)%len(images)]})
"""
    with open(os.path.join(projects_dir, f"{slug}.md"), "w") as f:
        f.write(content)

# Generate 7 blogs
for i in range(7):
    title = blog_titles[i]
    date_str = (base_date - timedelta(days=i*3)).strftime("%Y-%m-%d")
    slug = title.lower().replace(" ", "-")
    cover = images[(i + 2) % len(images)]
    
    content = f"""---
title: "Log: {title}"
date: {date_str}
category: "Adventures"
cover_image: "{cover}"
summary: "System logs and telemetry tracking from the {title} mission."
tags: ["off-grid", "automotive"]
---

# {title}

Mission parameters achieved.

## Environmental Data

```bash
> Temp: 45F
> Alt: 6000ft
```

![Location]({images[(i+3)%len(images)]})
"""
    with open(os.path.join(blog_dir, f"{slug}.md"), "w") as f:
        f.write(content)
