import sys
try:
    from PIL import Image
    import colorsys
    
    img1 = Image.open(r'C:\Users\wadhw\.gemini\antigravity-ide\brain\e2bdc83f-89c4-49ac-b56a-dc6a6512ea6b\.user_uploaded\media_1791563528136.png').convert('RGBA')
    # get center pixel color for a rough check or resize to 1x1
    r, g, b, a = img1.resize((1, 1)).getpixel((0, 0))
    hsv1 = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
    print(f"Artifact 1 PNG: RGB {r,g,b}, Hue {hsv1[0]*360:.1f} (Size: {img1.size})")

    img2 = Image.open(r'C:\Users\wadhw\.gemini\antigravity-ide\brain\e2bdc83f-89c4-49ac-b56a-dc6a6512ea6b\.user_uploaded\media_1791563535049.jpg').convert('RGB')
    r2, g2, b2 = img2.resize((1, 1)).getpixel((0, 0))
    hsv2 = colorsys.rgb_to_hsv(r2/255.0, g2/255.0, b2/255.0)
    print(f"Artifact 2 JPG: RGB {r2,g2,b2}, Hue {hsv2[0]*360:.1f} (Size: {img2.size})")

except Exception as e:
    print("Error:", e)
