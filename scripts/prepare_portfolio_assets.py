#!/usr/bin/env python3
import json, os, shutil
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DATA_CANDIDATES = [
    os.path.join(BASE_DIR, "data"),
    os.path.join(os.path.dirname(BASE_DIR), "groundNewsOps", "data"),
]
DATE_TAG = "2026-02-25"
BIAS_PATH = None
for d in DATA_CANDIDATES:
    p = os.path.join(d, f"biases_{DATE_TAG}.jsonl")
    if os.path.exists(p):
        BIAS_PATH = p
        break
if not BIAS_PATH:
    print(f"Bias file not found for date {DATE_TAG} in candidates: {DATA_CANDIDATES}")
    raise SystemExit(1)

# Load the first valid item
first = None
with open(BIAS_PATH, 'r', encoding='utf-8') as f:
    for line in f:
        line=line.strip()
        if not line:
            continue
        try:
            first = json.loads(line)
            break
        except Exception:
            continue

if not first:
    print("No valid bias item found in biases file.")
    raise SystemExit(1)

# Prepare bias card data
title = first.get("title", "Untitled Article")
biases = first.get("biases_detected", [])
bias_list_str = []
for b in biases[:5]:
    if isinstance(b, dict):
        lab = b.get("bias") or b.get("name") or str(b)
        sev = b.get("severity", "")
        bias_list_str.append(f"- {lab} ({sev})" if sev else f"- {lab}")
    else:
        bias_list_str.append(f"- {str(b)}")

evidence = ""
if biases and isinstance(biases[0], dict):
    evidence = biases[0].get("evidence", "")

# Create bias card image
IMG_WIDTH, IMG_HEIGHT = 1200, 600
img = Image.new("RGB", (IMG_WIDTH, IMG_HEIGHT), color=(255, 255, 255))
draw = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("DejaVuSans.ttf", 20)
    title_font = ImageFont.truetype("DejaVuSans.ttf", 30)
    line_height = 24
    bullet_indent = 20
    margin = 20
except Exception:
    font = ImageFont.load_default()
    title_font = font
    line_height = 14
    bullet_indent = 10
    margin = 10

y = margin
draw.text((margin, y), "Article Bias Breakdown", font=title_font, fill=(0,0,0))
y += title_font.size + margin // 2
draw.text((margin, y), f"Source: {first.get('source', 'N/A')}", font=font, fill=(50,50,50))
y += line_height
draw.text((margin, y), f"Title: {title[:100]}...", font=font, fill=(0,0,0))
y += line_height + margin // 2
draw.text((margin, y), "Biases Detected:", font=font, fill=(0,0,0))
y += line_height
for b_str in bias_list_str:
    draw.text((margin + bullet_indent, y), b_str, font=font, fill=(0,0,0))
    y += line_height

if evidence:
    draw.text((margin, y + margin // 2), f"Evidence (first bias): {evidence[:150]}...", font=font, fill=(30,30,30))

out_path = os.path.join(PUBLIC_DIR, f"bias_first_card_{DATE_TAG}.png")
os.makedirs(os.path.dirname(out_path), exist_ok=True)
img.save(out_path)
print(f"Saved bias card image to {out_path}")

# Create compass placeholder image if it doesn't exist
compass_placeholder_path = os.path.join(PUBLIC_DIR, "dashboard_compass_2026-02-25.png")
if not os.path.exists(compass_placeholder_path):
    blank = Image.new("RGB", (800, 600), color=(118, 118, 118)) # Placeholder gray
    draw_blank = ImageDraw.Draw(blank)
    try:
        placeholder_font = ImageFont.truetype("DejaVuSans.ttf", 40)
    except Exception:
        placeholder_font = ImageFont.load_default()
    text = "GroundNewsOps Compass Visualization (Placeholder)"
    bbox = draw_blank.textbbox((0, 0), text, font=placeholder_font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    draw_blank.text(( (800-text_width)/2, (600-text_height)/2 ), text, font=placeholder_font, fill=(200,200,200))
    blank.save(compass_placeholder_path)
    print(f"Created placeholder compass image at {compass_placeholder_path}")

# Copy latest Axelrod Economy video to public
axelrod_vid_dir = os.path.join(os.path.dirname(BASE_DIR), "AxelrodEconomy", "visualizations")
latest_vid_file = None
for fname in ["economy_evolution.mp4", "network_cliques.mp4", "status_vs_leisure.mp4"]:
    fpath = os.path.join(axelrod_vid_dir, fname)
    if os.path.exists(fpath):
        latest_vid_file = fpath
        break
if latest_vid_file:
    dest_vid_path = os.path.join(PUBLIC_DIR, "economy_latest.mp4")
    shutil.copyfile(latest_vid_file, dest_vid_path)
    print(f"Copied latest Axelrod video to {dest_vid_path}")
else:
    print("No Axelrod Economy video found in visualizations directory.")

print("Asset preparation script finished.")