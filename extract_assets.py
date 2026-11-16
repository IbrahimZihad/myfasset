import pymupdf, os
os.makedirs("extracted", exist_ok=True)
doc = pymupdf.open("myfasset-company-booklet.pdf")
seen = set()
for pno, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    pix.save(f"extracted/page-{pno+1}.png")
    for imgno, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        if xref in seen: continue
        seen.add(xref)
        d = doc.extract_image(xref)
        ext = d["ext"]
        fn = f"extracted/img-x{xref}.{ext}"
        open(fn, "wb").write(d["image"])
        print(fn, d["width"], d["height"], len(d["image"]))
doc.close()
