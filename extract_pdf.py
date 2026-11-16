import pymupdf
for name in ["myfasset-company-booklet.pdf", "myfasset-foretagsbroschyr-sv.pdf"]:
    doc = pymupdf.open(name)
    print("="*70)
    print(name, "pages:", len(doc))
    for i, page in enumerate(doc):
        print(f"--- PAGE {i+1} ({page.rect.width}x{page.rect.height}) ---")
        print(page.get_text())
        print("IMAGES:", [(img[0], img[2], img[3]) for img in page.get_images(full=True)])
    doc.close()
