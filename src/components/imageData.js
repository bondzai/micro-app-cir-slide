import f1 from "../assets/flux.png"
import f2 from "../assets/count-his.png"
import n1 from "../assets/n1.png"
import n2 from "../assets/n2.png"
import n3 from "../assets/n3.png"

class cirtification {
    constructor(name, image, description, date) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.date = date;
    }
}

export const ImageData = [
    new cirtification(
        "", 
        f1, 
        "Influx scripts for MMAT API", 
        ""
        ),
]
