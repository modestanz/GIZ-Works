import subprocess, time, sys, uno
from com.sun.star.beans import PropertyValue
src, dst = sys.argv[1], sys.argv[2]
p = subprocess.Popen(["soffice","--headless","--invisible","--norestore",'--accept=socket,host=localhost,port=2002;urp;'])
ctx = uno.getComponentContext()
resolver = ctx.ServiceManager.createInstanceWithContext("com.sun.star.bridge.UnoUrlResolver", ctx)
for _ in range(60):
    try:
        rctx = resolver.resolve("uno:socket,host=localhost,port=2002;urp;StarOffice.ComponentContext"); break
    except Exception: time.sleep(1)
desktop = rctx.ServiceManager.createInstanceWithContext("com.sun.star.frame.Desktop", rctx)
def pv(n,v):
    x=PropertyValue(); x.Name=n; x.Value=v; return x
doc = desktop.loadComponentFromURL(uno.systemPathToFileUrl(src), "_blank", 0, (pv("Hidden",True),))
doc.refresh()
idx = doc.getDocumentIndexes()
for i in range(idx.getCount()): idx.getByIndex(i).update()
doc.storeToURL(uno.systemPathToFileUrl(dst), (pv("FilterName","MS Word 2007 XML"),))
doc.storeToURL(uno.systemPathToFileUrl(dst.replace('.docx','.pdf')), (pv("FilterName","writer_pdf_Export"),))
doc.close(True)
try: desktop.terminate()
except Exception: pass
p.wait(timeout=30)
print("done", idx.getCount())
