from PIL import Image
import sys
import os

def resize_image(input_path, output_path, width):
    try:
        img = Image.open(input_path)
        w_percent = (width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((width, h_size), Image.Resampling.LANCZOS)
        img.save(output_path, optimize=True)
        print(f"Resized {input_path} to {width}px width at {output_path}")
    except Exception as e:
        print(f"Error: {e}")
        # Need to install PIL if not present? But usually included in standard python or user env. 
        # If this fails, we will try pip install pillow
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python resize.py <input> <output> <width>")
        sys.exit(1)
    resize_image(sys.argv[1], sys.argv[2], int(sys.argv[3]))
