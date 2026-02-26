#!/usr/bin/env python3
import json, os
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

# Construct label data
title = first.get("title", "Untitled Article")
biases = first.get("biases_detected", [])

bias_list = []
for b in biases[:5]:
    if isinstance(b, dict):
        lab = b.get("bias") or b.get("name") or str(b)
        sev = b.get("severity", "")
        bias_list.append((lab, sev))
    else:
        bias_list.append((str(b), ""))

evidence = ""
if biases and isinstance(biases[0], dict):
    evidence = biases[0].get("evidence", "")

# Create image
W, H = 1200, 600
img = Image.new("RGB", (W, H), color=(255, 255, 255))
draw = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("DejaVuSans.ttf", 20)
except Exception:
    font = ImageFont.load_default()

# Layout
y = 20
draw.text((20, y), "Bias Breakdown (Article 1)", font=font, fill=(0,0,0))
y += 34
draw.text((20, y), f"Title: {title[:110]}", font=font, fill=(0,0,0))
y += 28
draw.text((20, y), "Biases Detected:", font=font, fill=(0,0,0))
y += 24
for lab, sev in bias_list:
    sev_text = f" ({sev})" if sev else ""
    draw.text((40, y), f"- {lab}{sev_text}", font=font, fill=(0,0,0))
    y += 22

draw.text((20, y+4), f"Evidence (first bias): {evidence}"[:180], font=font, fill=(0,0,0))

out_path = os.path.join(PUBLIC_DIR, f"bias_first_card_{DATE_TAG}.png")
os.makedirs(os.path.dirname(out_path), exist_ok=True)
img.save(out_path)
print(f"Saved bias card image to {out_path}")
