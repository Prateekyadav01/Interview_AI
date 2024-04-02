function generatePDF() {
    const element = document.getElementById("preview-sc");

    html2pdf().from(element).save('download.pdf');    
    }
    
    function downloadCode(){
    generatePDF();
    setTimeout(function() { window.location=window.location;},3000);
}