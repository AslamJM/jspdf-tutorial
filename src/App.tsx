import jsPDF from "jspdf";
import image from "./sqm.png";

function App() {
  const base_x = 10;
  const bas_y = 10;

  const logo = new Image();
  logo.src = image;

  function header(doc: jsPDF) {

    const logo_w = 50
    const logo_h = 35

    doc.addImage(logo, "png", base_x, bas_y, logo_w, logo_h);

    doc.setFontSize(15);
    doc.text("SQM Janitorial Services inc.", base_x+logo_w-3, bas_y+logo_h/2+5);

    doc.setFontSize(10);
    doc.text(
      [
        "330 Brunel Road,",
        "Mississauga ON L4Z 2C2,",
        "Canada.",
        "+1 905-565-8585",
        "info@sqmjanitorial.com",
      ],
      base_x+8,
      bas_y + logo_h+5
    );
  }

  const downloadPdf = () => {
    const doc = new jsPDF({unit:"px",compress:true});

    header(doc);

    doc.save("table.pdf");
  };

  return (
    <div>
      <img src={image} width={70} />
      <button onClick={() => downloadPdf()}>Download Pdf</button>
    </div>
  );
}

export default App;
