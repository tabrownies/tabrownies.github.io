import os
import subprocess
from pathlib import Path

def convert_heic_to_jpg(directory):
    path = Path(directory)
    # Find all HEIC files recursively (case-insensitive)
    heic_files = [f for f in path.rglob('*') if f.suffix.lower() == '.heic']
    
    if not heic_files:
        print("No HEIC files found.")
    else:
        print(f"Found {len(heic_files)} HEIC files. Starting conversion...")
        for heic_path in heic_files:
            try:
                jpg_path = heic_path.with_suffix('.jpg')
                print(f"Converting: {heic_path.name} -> {jpg_path.name}")
                
                # We use the macOS built-in 'sips' utility
                subprocess.run(
                    ["sips", "-s", "format", "jpeg", str(heic_path), "--out", str(jpg_path)],
                    check=True,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL
                )
                
                os.remove(heic_path)
            except Exception as e:
                print(f"Error converting {heic_path.name}: {e}")

def convert_videos_to_mp4(directory):
    path = Path(directory)
    # Common video formats to convert
    video_extensions = ['.mov', '.m4v', '.avi', '.mkv']
    video_files = [f for f in path.rglob('*') if f.suffix.lower() in video_extensions]
    
    if not video_files:
        print("No video files found.")
    else:
        print(f"Found {len(video_files)} video files. Starting conversion...")
        for video_path in video_files:
            try:
                mp4_path = video_path.with_suffix('.mp4')
                print(f"Converting: {video_path.name} -> {mp4_path.name}")
                
                # We use the macOS built-in 'avconvert' utility
                subprocess.run(
                    ["avconvert", "--preset", "Preset1280x720", "--source", str(video_path), "--output", str(mp4_path), "--replace"],
                    check=True,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL
                )
                
                os.remove(video_path)
            except Exception as e:
                print(f"Error converting {video_path.name}: {e}")

if __name__ == "__main__":
    # Try from project root or website root
    assets_dir = os.path.abspath("./website/src/assets")
    if not os.path.exists(assets_dir):
        assets_dir = os.path.abspath("./src/assets")
        
    if os.path.exists(assets_dir):
        print(f"Scanning directory: {assets_dir}")
        convert_heic_to_jpg(assets_dir)
        print()
        convert_videos_to_mp4(assets_dir)
        print("\nFinished!")
    else:
        print(f"Could not find the assets directory. Make sure you're in the right folder.")
