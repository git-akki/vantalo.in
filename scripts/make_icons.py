"""Vantalo favicon: the logo's own lowercase V plus the green '.in' dot on a dark tile."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

out = Path(sys.argv[1])
INK, GREEN = (20, 19, 15, 255), (0, 214, 136, 255)
IVORY = (250, 248, 245, 255)
# V outline from Brand/Logos/VANTALO_PRIMARY.svg (glyph units, baseline y=0).
V = [(12, -5.15625), (17.59375, -22.15625), (23.5625, -22.15625), (15.359375, 0),
     (8.5625, 0), (0.40625, -22.15625), (6.40625, -22.15625)]
# Layout in a 64-unit tile.
TX, TY, S = 8.0, 48.6, 1.5
DOT = (50.2, 44.1, 4.6)
RADIUS = 14

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="{RADIUS}" fill="#14130F"/>
  <path transform="translate({TX} {TY}) scale({S})" fill="#FAF8F5" d="M{' L'.join(f'{x} {y}' for x, y in V)} Z"/>
  <circle cx="{DOT[0]}" cy="{DOT[1]}" r="{DOT[2]}" fill="#00D688"/>
</svg>
'''
(out / "icon.svg").write_text(svg)

def render(size, rounded=True):
    k = size * 8 / 64  # 8x supersampling
    img = Image.new("RGBA", (size * 8, size * 8), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    if rounded:
        d.rounded_rectangle([0, 0, size * 8 - 1, size * 8 - 1], radius=RADIUS * k, fill=INK)
    else:
        d.rectangle([0, 0, size * 8, size * 8], fill=INK)
    d.polygon([((TX + x * S) * k, (TY + y * S) * k) for x, y in V], fill=IVORY)
    cx, cy, r = DOT
    d.ellipse([(cx - r) * k, (cy - r) * k, (cx + r) * k, (cy + r) * k], fill=GREEN)
    return img.resize((size, size), Image.LANCZOS)

# iOS applies its own corner mask, so the apple icon is a full square.
render(180, rounded=False).save(out / "apple-icon.png")
render(256).save(out / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
render(512).save(out / "preview-512.png")
strip = Image.new("RGBA", (16 + 8 + 32 + 8 + 48, 48), (250, 248, 245, 255))
for x, s in ((0, 16), (24, 32), (64, 48)):
    strip.paste(render(s), (x, 48 - s), render(s))
strip.resize((strip.width * 4, strip.height * 4), Image.NEAREST).save(out / "preview-sizes.png")
print("done")
