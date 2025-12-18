import urllib.request

url = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=20&fm=avif"
output_path = "public/hero-bg.avif"

try:
    with urllib.request.urlopen(url) as response, open(output_path, 'wb') as out_file:
        data = response.read()
        out_file.write(data)
    print(f"Successfully downloaded to {output_path}")
except Exception as e:
    print(f"Error downloading image: {e}")
