import sys
from PIL import Image

def clean_white_background(img_path, output_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is close to white
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            # Change the white pixel to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Also crop the transparent borders
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Cleaned and saved to {output_path} with size {img.size}")

def crop_transparent(img_path, output_path):
    img = Image.open(img_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save(output_path, "PNG")
    print(f"Cropped transparent and saved to {output_path} with size {img.size}")

try:
    creator_path = r'd:\Study\B.Tech CSE\Semester 1\Programming\Front End Developement\Random\CRAB\src\assets\crab\crab-creator.png'
    business_path = r'd:\Study\B.Tech CSE\Semester 1\Programming\Front End Developement\Random\CRAB\src\assets\crab\crab-business.png'
    
    clean_white_background(creator_path, creator_path, tolerance=30)
    crop_transparent(business_path, business_path)
    
except Exception as e:
    print("Error:", e)
