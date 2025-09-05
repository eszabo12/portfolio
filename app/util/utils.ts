function downloadPdfFromUrl( pdfUrl: string) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Elle_Szabo_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
