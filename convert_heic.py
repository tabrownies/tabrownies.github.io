import os
import subprocess
from pathlib import Path

def convert_heic_to_jpg(directory):
    path = Path(directory)
    # Find all HEIC files recursively (case-insensitive)
    heic_files = [f for f in path.rglob('*') if f.suffix.lower() == '.heic']
    
    if not heic_files:
        print("No HEIC files found.")
        return

    print(f"Found {len(heic_files)} HEIC files. Starting conversion...")
    
    for heic_path in heic_files:
        try:
            jpg_path = heic_path.with_suffix('.jpg')
            print(f"Converting: {heic_path.name} -> {jpg_path.name}")
            
            # We use the macOS built-in 'sips' utility so you don't need any pip packages!
            subprocess.run(
                ["sips", "-s", "format", "jpeg", str(heic_path), "--out", str(jpg_path)],
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL
            )
            
            # Uncomment the line below if you want to automatically delete the original HEIC
            os.remove(heic_path)
            
        except subprocess.CalledProcessError:
            print(f"Failed to convert {heic_path.name}")
        except Exception as e:
            print(f"Error converting {heic_path.name}: {e}")

if __name__ == "__main__":
    # Try from project root or website root
    assets_dir = os.path.abspath("./website/src/assets")
    if not os.path.exists(assets_dir):
        assets_dir = os.path.abspath("./src/assets")
        
    if os.path.exists(assets_dir):
        print(f"Scanning directory: {assets_dir}")
        convert_heic_to_jpg(assets_dir)
        print("\nFinished!")
    else:
        print(f"Could not find the assets directory. Make sure you're in the right folder.")
