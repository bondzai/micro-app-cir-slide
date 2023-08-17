import f1 from "../assets/f1.png"
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
        "Fixed: Conect devices API instead of Location API. (Frontend done, Backend done)", 
        "2022-10-18"
        ),
    new cirtification(
        "", 
        f2, 
        "Fixed: Count history. (Frontend done, Backend done)", 
        "2022-10-18"
        ),
    new cirtification(
        "", 
        n2, 
        "New issue 1 (done)", 
        "2022-10-18"
        ),
    new cirtification(
        "", 
        n1, 
        "New issue 2 (Frontend done, Backend inprogress)", 
        "2022-10-18"
        ),
    new cirtification(
        "", 
        n3, 
        "New issue 3", 
        "2022-10-18"
        ),
]
