import os
import glob
import subprocess
import fitz  # PyMuPDF
import shutil

os.makedirs('webapp/public/notebooks/AUD_USD', exist_ok=True)
os.makedirs('webapp/public/notebooks/EUR_USD', exist_ok=True)
os.makedirs('webapp/public/notebooks/GBP_USD', exist_ok=True)
os.makedirs('webapp/public/notebooks/USD_JPY', exist_ok=True)
os.makedirs('webapp/public/data', exist_ok=True)
os.makedirs('webapp/public/report', exist_ok=True)

directories = [
    ('1.AUD_USD', 'AUD_USD'),
    ('2.EUR_USD', 'EUR_USD'),
    ('3.GBP_USD', 'GBP_USD'),
    ('4.USD_JPY', 'USD_JPY')
]

for dir_name, prefix in directories:
    for nb in glob.glob(f'{dir_name}/*.ipynb'):
        print(f"Converting {nb} to HTML...")
        dest_dir = os.path.join(os.getcwd(), 'webapp', 'public', 'notebooks', prefix)
        out = subprocess.run(['jupyter', 'nbconvert', '--to', 'html', nb, '--output-dir', dest_dir])

    for data_file in glob.glob(f'{dir_name}/*.csv'):
        dest = os.path.join('webapp/public/data', os.path.basename(data_file))
        shutil.copy(data_file, dest)

if os.path.exists('DataAnalyze.ipynb'):
    print("Converting DataAnalyze.ipynb to HTML...")
    dest_dir = os.path.join(os.getcwd(), 'webapp', 'public', 'notebooks')
    subprocess.run(['jupyter', 'nbconvert', '--to', 'html', 'DataAnalyze.ipynb', '--output-dir', dest_dir])

pdf_path = 'LastVersion.pdf'
if os.path.exists(pdf_path):
    print("Converting PDF to images...")
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=150)
        output_file = f'webapp/public/report/page_{i+1}.jpg'
        pix.save(output_file)
        print(f"Saved {output_file}")
    
    print("PDF Conversion Complete!")
