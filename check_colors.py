import struct
import binascii

def get_png_ihdr(filename):
    with open(filename, 'rb') as f:
        data = f.read(24)
        if data[:8] != b'\x89PNG\r\n\x1a\n':
            return None
        return struct.unpack('>II', data[16:24])

def check_color(filename):
    # Just a simple hack: read the file as bytes and look for "blue" vs "orange" hex codes if they were text, but they are binary.
    pass

# Let's just try to open with PIL, it should be installed on most dev machines or I can install it
import sys
try:
    from PIL import Image
    import colorsys
    
    img1 = Image.open('src/assets/crab/crab-creator.png').convert('RGB')
    img1.thumbnail((10, 10))
    avg_color1 = img1.resize((1, 1)).getpixel((0, 0))
    hsv1 = colorsys.rgb_to_hsv(avg_color1[0]/255.0, avg_color1[1]/255.0, avg_color1[2]/255.0)
    
    img2 = Image.open('src/assets/crab/crab-business.png').convert('RGB')
    img2.thumbnail((10, 10))
    avg_color2 = img2.resize((1, 1)).getpixel((0, 0))
    hsv2 = colorsys.rgb_to_hsv(avg_color2[0]/255.0, avg_color2[1]/255.0, avg_color2[2]/255.0)
    
    print(f"crab-creator.png avg RGB: {avg_color1}, Hue: {hsv1[0]*360:.1f} (Blue is ~240, Orange is ~30)")
    print(f"crab-business.png avg RGB: {avg_color2}, Hue: {hsv2[0]*360:.1f}")
except Exception as e:
    print("Error:", e)
    
