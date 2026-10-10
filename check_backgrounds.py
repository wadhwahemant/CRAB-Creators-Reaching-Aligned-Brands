import sys
from PIL import Image

try:
    paths = [
        r'C:\Users\wadhw\.gemini\antigravity-ide\brain\e2bdc83f-89c4-49ac-b56a-dc6a6512ea6b\.user_uploaded\media_1791563528136.png',
        r'C:\Users\wadhw\.gemini\antigravity-ide\brain\e2bdc83f-89c4-49ac-b56a-dc6a6512ea6b\.user_uploaded\media_1791563535049.jpg',
        r'd:\Study\B.Tech CSE\Semester 1\Programming\Front End Developement\Random\CRAB\src\assets\crab\crab-creator.png',
        r'd:\Study\B.Tech CSE\Semester 1\Programming\Front End Developement\Random\CRAB\src\assets\crab\crab-business.png'
    ]

    for p in paths:
        try:
            img = Image.open(p).convert('RGBA')
            w, h = img.size
            top_left = img.getpixel((0, 0))
            center = img.getpixel((w//2, h//2))
            bottom_right = img.getpixel((w-1, h-1))
            print(f"File: {p.split(chr(92))[-1]}")
            print(f"Size: {w}x{h}")
            print(f"Top-Left RGB: {top_left}")
            print(f"Center RGB: {center}")
            print(f"Bottom-Right RGB: {bottom_right}")
            print("-" * 30)
        except Exception as e:
            print(f"Failed to process {p}: {e}")

except Exception as e:
    print("Error:", e)
