from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "logos"
TARGET = SOURCE / "normalized"
TARGET.mkdir(parents=True, exist_ok=True)

FILES = [
    *[f"partner-{number}.jpg" for number in range(27, 45)],
    "profile-bertos.png", "profile-nayati.png", "profile-sirman.png",
    "profile-kingcool.png", "profile-aristarco.png", "profile-halton.png",
    "profile-ansul.png", "profile-swastik-synergy.png",
    "client-2.png", "client-3.png", "client-5.png", "client-7.png",
    "client-9-1.png", "client-11.png", "client-12.png", "client-13.png",
    "client-14.png", "client-16.png", "client-17.png", "client-18.png",
    "client-19.png", "client-20.png", "client-21.png",
    "client-special-37.png", "client-special-38.png", "client-special-39.png",
    "client-special-40.png", "international-22.jpg", "international-24.jpg",
    "international-25.jpg", "international-26.jpg",
    "client-sheraton.png", "client-movenpick.png", "client-westin.png", "client-hilton.png",
]

PADDING_RATIO = 0.035


def visible_bbox(image: Image.Image):
    rgba = image.convert("RGBA")
    alpha_bbox = rgba.getchannel("A").getbbox()
    if alpha_bbox and alpha_bbox != (0, 0, rgba.width, rgba.height):
        return alpha_bbox

    rgb = rgba.convert("RGB")
    white = Image.new("RGB", rgb.size, "white")
    difference = ImageChops.difference(rgb, white).convert("L")
    # Ignore JPEG noise and near-white paper backgrounds.
    mask = difference.point(lambda value: 255 if value > 18 else 0)
    return mask.getbbox() or (0, 0, rgba.width, rgba.height)


for filename in FILES:
    source = SOURCE / filename
    image = Image.open(source).convert("RGBA")
    cropped = image.crop(visible_bbox(image))
    padding = max(8, round(max(cropped.size) * PADDING_RATIO))
    canvas = Image.new(
        "RGBA",
        (cropped.width + padding * 2, cropped.height + padding * 2),
        (255, 255, 255, 0),
    )
    canvas.alpha_composite(cropped, (padding, padding))
    canvas.save(TARGET / f"{Path(filename).stem}.png", optimize=True)

print(f"Normalised {len(FILES)} logos into {TARGET}")
